import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service.js';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello() {
    return this.helloService.getHello();
  }

  @Get(':name')
  getHelloWithName(@Param('name') name: string) {
    return this.helloService.getHelloWithName(name);
  }

  @Get(':name/hbd')
  getBdayWishes(@Param('name') name: string, @Query('age') age: string) {
    return this.helloService.getBdayWishes(name, age);
  }
}
