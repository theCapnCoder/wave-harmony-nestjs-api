import { Module } from '@nestjs/common';
import { AuthController } from './controllers//auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { BearerStrategy } from './strategies/bearer.strategy';

@Module({
  imports: [PassportModule, UsersModule],
  providers: [LocalStrategy, BearerStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}