import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ExampleModule } from './examples/example.module';
import { ExamplesController } from './examples/controllers/app.controller';
import { ExamplesService } from './examples/services/app.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ExampleModule,
  ],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class AppModule {}
