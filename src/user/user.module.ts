import { Module } from '@nestjs/common';
import { HelloModule } from '../hello/hello.module.js';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [HelloModule],
})
export class UserModule {}
