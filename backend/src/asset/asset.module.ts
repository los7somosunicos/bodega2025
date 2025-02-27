import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [AssetController],
  providers: [AssetService],
  imports: [PrismaModule]
})
export class AssetModule {}
