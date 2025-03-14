import { BadRequestException, Injectable } from '@nestjs/common';
import { LoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class LoanService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(data: LoanDto) {
      
        return this.prisma.loan.create({ data });

  }

  async findAll() {
    return await this.prisma.loan.findMany();
  }

  async findOne(id:string) {
    try {
        const data = await this.prisma.loan.findUnique({ where: { id } });
        if (!data) throw new BadRequestException('No se encontro el prestamo');
        return data
    } catch (error) {
      throw new BadRequestException('No se encontro el prestamo');
    }
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    try {
        const data = await this.findOne(id);
        if (!data) throw new BadRequestException('No se encontro el prestamo');
        return await this.prisma.loan.update({
            where: { id },
            data: updateLoanDto,
        });

    } catch (error) {
      throw new BadRequestException('No se encontro el prestamo');
    }
  }

  async remove(id: string) {
    return await this.prisma.loan.update({
      where: { id }, 
      data: { deleteAt: new Date() },  
    });
  }
}
