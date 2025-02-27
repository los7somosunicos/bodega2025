import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { validate } from './config/env.validation';
import { AssetModule } from './asset/asset.module';
import { AssetModule } from './asset/asset.module';
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load:[configuration],
    }),
    AssetModule
  ],
  controllers: [],
  providers: [],
    })
export class AppModule {}
