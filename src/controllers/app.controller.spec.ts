import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/services/auth.service';

describe('AppController', () => {
  let appController: AppController;
  const user = {
    id: 1,
    first_name: 'test1',
    last_name: 'test2',
    roles: ['admin'],
    access_token: null,
    email: 'email',
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UsersService, AuthService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello test1 test2"', () => {
      expect(appController.getHello(user)).toBe('Hello test1 test2!');
    });
  });
});
