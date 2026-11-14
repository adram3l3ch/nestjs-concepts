import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello() {
    return 'Hello World!';
  }

  getHelloWithName(name: string) {
    return `Hello ${name}`;
  }

  getBdayWishes(name: string, age: string) {
    return `Happy ${age}th birthday ${name}`;
  }
}
