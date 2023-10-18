import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { User } from 'src/entities';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(login);

    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async validateUserByToken(accessToken: string): Promise<User | null> {
    const user = await this.usersService.findByAccessToken(accessToken);

    if (user) {
      return user;
    }

    return null;
  }

  //FIXME
  // hasRole(user: User, roles: string[]): boolean {
  //   return true;
  //   return (
  //     user.roles && user.roles.filter((role) => roles.includes(role)).length > 0
  //   );
  // }
}
