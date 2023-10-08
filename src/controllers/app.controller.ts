import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from '../users/users.service';
import { AuthUser } from 'src/auth/decorators/auth-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Auth()
  @Get()
  getHello(@AuthUser() user: User): string {
    return this.appService.getHello(user);
  }

  @Auth('admin')
  @Get('/admin')
  getHelloAdmin(@AuthUser() user: User): string {
    return this.appService.getHello(user);
  }
}
