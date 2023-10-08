import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from '../users/users.service';
import { AuthUser } from 'src/auth/decorators/auth.decorator';
import { BearerAuthGuard } from 'src/auth/guards/bearer.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(BearerAuthGuard)
  @Get()
  getHello(@AuthUser() user: User): string {
    return this.appService.getHello(user);
  }
}
