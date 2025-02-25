import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
/*eslint-disable */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.setGlobalPrefix('api/v1');
  
  app.useGlobalPipes(
    new ValidationPipe({
     whitelist:true,
     forbidNonWhitelisted:true,
     transform:true, 
    })
  )
  await app.listen(3001, ( )=>
    console.log(`Server is running on http://localhost:3001`  
  ));
}
bootstrap();
