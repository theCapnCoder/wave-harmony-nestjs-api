import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local.auth.guard';
import { User } from 'src/entities';
import { Auth } from '../decorators/auth.decorator';
import { AuthUser } from '../decorators/auth-user.decorator';

@Controller('auth')
export class AuthController {
  @Auth()
  @Get('me')
  me(@AuthUser() user: User): User {
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@AuthUser() user: User): User {
    return user;
  }
}
