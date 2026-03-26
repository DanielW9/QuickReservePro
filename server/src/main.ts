import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  await app.listen(8081);

  const url = await app.getUrl();
  console.log(`Application is running on: ${url}`);
}
bootstrap();