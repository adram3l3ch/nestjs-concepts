import { Injectable } from '@nestjs/common';
import { HelloService } from '../hello/hello.service.js';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  constructor(private readonly helloService: HelloService) {}

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  wishUserHappyBirthday(id: number): string {
    const user = this.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.helloService.getBdayWishes(user.name, 31); // Assuming age is 30 for demonstration
  }
}
