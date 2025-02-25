import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:'.env',
  }),
})
export class AppModule {}
