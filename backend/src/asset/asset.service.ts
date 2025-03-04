import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAssetDto) {
    // Verificar si hay categorías
    const checkExist = await this.prisma.category.findUnique({where:{id:data.categoryId}});

    if (!checkExist) {
      throw new BadRequestException('No hay categorías o no existe la categoria');
    }
    console.log(data);
    return await this.prisma.asset.create({
      data: {
        ...data,
        available: data.quantity 
      },
    });
  }

  async findAll(skip = 0, take = 10) {
    try {
      return await this.prisma.asset.findMany({
        where: { deleteAt: null },
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new NotFoundException('No hay datos');
    }
  }

  async findOne(id: string) {
    const data = await this.prisma.asset.findUnique({ where: { id } });
    if (!data) throw new NotFoundException('Asset not found');
    return await this.prisma.asset.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateAssetDto) {
    try {
      return await this.prisma.asset.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException('el ${id} no existe');
    }
  }

  async remove(id: string) {
    return await this.prisma.asset.update({
      where: { id },
      data: { deleteAt: new Date() },
    });
  }
}
