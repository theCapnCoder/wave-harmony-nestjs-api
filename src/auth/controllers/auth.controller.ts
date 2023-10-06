import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocaAuthlGuard } from '../guards/local.auth.guard';
import { BearerAuthGuard } from '../guards/bearer.auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(BearerAuthGuard)
  @Get('me')
  me(): any {
    return 'me';
  }

  @UseGuards(LocaAuthlGuard)
  @Post('login')
  login(@Request() req) {
    console.log('enter');
    return req.body;
  }
}
