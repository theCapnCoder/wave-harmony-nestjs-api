import { Injectable } from '@nestjs/common';
import { User } from '../../users/users.service';

@Injectable()
export class ExamplesService {
  getHello(user: User): string {
    return `Hello ${[user.first_name, user.last_name].join(' ')}!`;
  }
}
