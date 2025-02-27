import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetService {
  constructor(private readonly prisma: PrismaService) {}
  
 async create(data: CreateAssetDto) {
    return await this.prisma.asset.create({
      data
    });
  }

  async findAll() {
    return await this.prisma.asset.findMany({where: {deleteAt: null}});
  }

  async findOne(id: string) {
    const data = await this.prisma.asset.findUnique({where: {id}});
    if (!data) throw new NotFoundException('Asset not found');
    return await this.prisma.asset.findUnique({where: {id}});
  }

  async update(id: string, data: UpdateAssetDto) {
    try {
      return await this.prisma.asset.update({
        where: {id},
        data
      })} 
      catch (error) {
      throw new NotFoundException('el ${id} no existe');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
