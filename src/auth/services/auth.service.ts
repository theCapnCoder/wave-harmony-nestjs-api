import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = this.usersService.findByEmail(login);
    console.log('eeeeeeee');

    if (user && user.password === password) {
      const result = Object.assign({}, user);
      delete result.password;
      return result;
    }
    return null;
  }

  async validateUserByToken(accessToken: string): Promise<any> {
    const user = this.usersService.findByAccessToken(accessToken);

    if (user) {
      const result = Object.assign({}, user);
      delete result.password;
      return result;
    }

    return null;
  }
}
