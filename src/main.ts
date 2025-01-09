import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';
import { INestApplication, ValidationPipe } from '@nestjs/common';

function setupOpenApiSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('nest-rest')
    .setDescription('rest playground of nest js')
    .setVersion(version)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
}

function setupClassValidator(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe());
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupOpenApiSwagger(app);
  setupClassValidator(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
