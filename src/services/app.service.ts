import { Injectable } from '@nestjs/common';
import { User } from '../users/users.service';

@Injectable()
export class AppService {
  getHello(user: User): string {
    return `Hello ${[user.first_name, user.last_name].join(' ')}!`;
  }
}
