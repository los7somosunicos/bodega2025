import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { validate } from './config/env.validation';
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load:[configuration],
    })
  ],
  controllers: [],
  providers: [],
    })
export class AppModule {}
