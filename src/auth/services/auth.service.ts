import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = this.usersService.findByEmail(login);

    if (user && user.password === password) {
      const result = Object.assign({}, user);
      delete result.password;
      return result;
    }
    return null;
  }

  async validateUserByToken(accessToken: string): Promise<User | null> {
    const user = this.usersService.findByAccessToken(accessToken);

    if (user) {
      const result = Object.assign({}, user);
      delete result.password;
      return result;
    }

    return null;
  }

  hasRole(user: User, roles: string[]): boolean {
    return (
      user.roles && user.roles.filter((role) => roles.includes(role)).length > 0
    );
  }
}
