import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ExamplesController } from './controllers/app.controller';
import { ExamplesService } from './services/app.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class ExampleModule {}
