import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExampleModule } from './examples/example.module';
import { ExamplesController } from './examples/controllers/app.controller';
import { ExamplesService } from './examples/services/app.service';

@Module({
  imports: [AuthModule, UsersModule, ExampleModule],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class AppModule {}
