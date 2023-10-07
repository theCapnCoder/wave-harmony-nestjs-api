import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local.auth.guard';
import { BearerAuthGuard } from '../guards/bearer.auth.guard';
import { User } from '../../users/users.service';

@Controller('auth')
export class AuthController {
  @UseGuards(BearerAuthGuard)
  @Get('me')
  me(@Request() req): User {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): User {
    return req.user;
  }
}
