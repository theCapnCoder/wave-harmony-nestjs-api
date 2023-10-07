import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ session: false });
  }

  async validate(token): Promise<any> {
    const user = await this.authService.validateUserByToken(token);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
