import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    console.log('local');
    super({ usernameField: 'login' });
  }

  async validate(userName: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(userName, password);
    console.log('validate');
    if (!user) {
      throw new UnauthorizedException();
    }
    return false;
  }
}
