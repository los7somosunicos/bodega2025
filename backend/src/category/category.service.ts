import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma:PrismaService) {}
 
  async create(data: CreateCategoryDto) {
    const dataExist = await this.prisma.category.findFirst({where: {name: data.name}});
    if(dataExist) new NotFoundException('La categoria ya existe');
    return await this.prisma.category.create({
      data
    }); 
  }

  async findAll() {
     try {
          return await this.prisma.category.findMany();
        } catch (error) {
          throw new NotFoundException('No hay datos');
        }
  }

 async findOne(id: string) {
    try {
      return await this.prisma.category.findUnique({where: {id}});
    } catch (error) {
      throw new NotFoundException('Categoria inexistente');
    };
  }

async update(id: string, data: UpdateCategoryDto) {
    try {
      return await this.prisma.category.update({ 
        where: { id }, 
        data });
    } catch (error) {
      throw new NotFoundException('Categoria inexistente');
    }
  }

 async remove(id: string) {
   const findAsset = await this.prisma.asset.findFirst({where: {categoryId: id}});
   if(findAsset) throw new NotFoundException('La categoria tiene activos asociados');
    return await this.prisma.category.delete({
      where: { id }
    });
  }
}
