import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/services/auth.service';
import { ExamplesController } from './app.controller';
import { ExamplesService } from '../services/app.service';

describe('AppController', () => {
  let appController: ExamplesController;
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
      controllers: [ExamplesController],
      providers: [ExamplesService, UsersService, AuthService],
    }).compile();

    appController = app.get<ExamplesController>(ExamplesController);
  });

  describe('root', () => {
    it('should return "Hello test1 test2"', () => {
      expect(appController.getHello(user)).toBe('Hello test1 test2!');
    });
  });
});
