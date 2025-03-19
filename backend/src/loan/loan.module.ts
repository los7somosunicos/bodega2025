import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';
import { AssetModule } from 'src/asset/asset.module';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
  imports: [PrismaModule, AssetModule],
})
export class LoanModule {}
