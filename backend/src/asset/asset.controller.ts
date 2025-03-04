import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  create(@Body() data: CreateAssetDto): Promise<CreateAssetDto> {
    return  this.assetService.create(data);
  }

  @Get()
  findAll(): Promise<CreateAssetDto[]> {
    return this.assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<CreateAssetDto> {
    return this.assetService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto):Promise<CreateAssetDto> {
    return this.assetService.update(id, updateAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<CreateAssetDto> {
    return this.assetService.remove(id);
  }
}
