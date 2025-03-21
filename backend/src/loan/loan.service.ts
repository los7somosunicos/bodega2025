import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AssetService } from 'src/asset/asset.service';

@Injectable()
export class LoanService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly asset: AssetService,
  ) {}

  async create(data: LoanDto) {
    const { assetId, quantity } = data;
    const asset = await this.asset.findOne(assetId);
    if (!asset) throw new BadRequestException('No se encontro el activo');
    if (asset.quantity < quantity)
      throw new BadRequestException('No hay suficiente cantidad de activos');
    await this.asset.update(assetId, { quantity: asset.quantity - quantity });
    return await this.prisma.loan.create({ data });
  }

  async findAll() {
    return await this.prisma.loan.findMany();
  }

  async findOne(id: string) {
    try {
      const data = await this.prisma.loan.findUnique({ where: { id } });
      if (!data) throw new BadRequestException('No se encontro el prestamo');
      return data;
    } catch (error) {
      throw new BadRequestException('No se encontro el prestamo');
    }
  }

  async update(id: string, updateData: UpdateLoanDto) {
    try {
        // Iniciar una transacción
        return await this.prisma.$transaction(async (prisma) => {
            // Verificar si el préstamo existe
            const loan = await prisma.loan.findUnique({ where: { id } });
            if (!loan) {
                throw new BadRequestException('No se encontró el préstamo');
            }

            // Si se intenta actualizar el assetId y la cantidad, validar la disponibilidad
            if (updateData.assetId && updateData.quantity !== undefined) {
                // Obtener el activo
                const asset = await prisma.asset.findUnique({
                    where: { id: updateData.assetId },
                });
                if (!asset) {
                    throw new BadRequestException('No se encontró el activo');
                }

                // Calcular la cantidad ya prestada para este activo (excluyendo el préstamo actual)
                const totalPrestado = await prisma.loan.aggregate({
                    _sum: { quantity: true },
                    where: {
                        assetId: updateData.assetId,
                        id: { not: id }, // Excluir el préstamo actual
                    },
                });

                const cantidadPrestada = totalPrestado._sum.quantity || 0;

                // Calcular la cantidad disponible
                const cantidadDisponible = asset.quantity - cantidadPrestada;

                // Validar si la nueva cantidad es válida
                if (updateData.quantity > cantidadDisponible + loan.quantity) {
                    throw new BadRequestException('No hay suficiente cantidad de activos');
                }
            }

            // Actualizar el préstamo
            const updatedLoan = await prisma.loan.update({
                where: { id },
                data: updateData,
            });

            return updatedLoan;
        });

    } catch (error) {
        // Manejo de errores
        if (error instanceof BadRequestException) {
            throw error; // Re-lanzar errores de validación
        }
        throw new InternalServerErrorException('Ocurrió un error al actualizar el préstamo');
    }
}

  async remove(id: string) {
    return await this.prisma.loan.update({
      where: { id },
      data: { deleteAt: new Date() },
    });
  }
}
