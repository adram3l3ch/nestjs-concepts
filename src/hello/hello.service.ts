import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HelloService {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    const APP_NAME = this.configService.get('APP_NAME');
    const APP_VERSION = this.configService.get('APP_VERSION');
    return `Hello ${APP_NAME} ${APP_VERSION}!`;
  }

  getHelloWithName(name: string) {
    return `Hello ${name}`;
  }

  getBdayWishes(name: string, age: number) {
    return `Happy ${age}${this.getNumberSuffix(age)} birthday ${name}`;
  }

  private getNumberSuffix(age: number) {
    if (typeof age !== 'number' || isNaN(age) || age < 0) {
      throw new Error('Invalid age');
    }
    switch (age % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
