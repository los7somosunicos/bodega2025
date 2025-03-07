import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { validate } from './config/env.validation';
import { AssetModule } from './asset/asset.module';
import { CategoryModule } from './category/category.module';
import { LoanModule } from './loan/loan.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load:[configuration],
    }),
    AssetModule,
    CategoryModule,
    LoanModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
    })
export class AppModule {}
