import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,    // Exibe apenas as propriedades inclusas no DTO.
    forbidNonWhitelisted: false,    // Gera um erro caso uma propriedade fora do DTO seja enviada.
    transform: true,    // Transforma o resultado em uma instância da classe do DTO.
    transformOptions: {
      enableImplicitConversion: true    // Se definido como verdadeiro, o transformador de classe tentará a conversão com base no tipo refletido de TS
    }
  }));
  await app.listen(process.env.NODE_PORT || 3000);
}
bootstrap();
