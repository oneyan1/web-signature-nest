import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Web-signature-app')
    .setDescription('REST api documentation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.DOCUMENTATION, app, document);

  await app.listen(PORT, () =>
    console.log(`Server has been started on the ${PORT} port`)
  );
}
start();
