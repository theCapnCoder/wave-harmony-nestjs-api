import { Controller, Get } from '@nestjs/common';
import { User } from '../../users/users.service';
import { AuthUser } from 'src/auth/decorators/auth-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ExamplesService } from '../services/app.service';

@Controller('examples')
export class ExamplesController {
  constructor(private readonly appService: ExamplesService) {}

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
