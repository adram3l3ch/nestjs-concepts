import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import appConfig from './config/app.config.js';
import { HelloModule } from './hello/hello.module.js';
import { UserModule } from './user/user.module.js';

@Module({
  imports: [
    // load env variables
    ConfigModule.forRoot({
      isGlobal: true, //globally available,
      load: [appConfig],
    }),
    HelloModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
