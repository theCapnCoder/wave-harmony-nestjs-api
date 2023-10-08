import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';

describe('AppController', () => {
  let appController: AppController;
  const user = {
    id: 1,
    first_name: 'test1',
    last_name: 'test2',
    access_token: null,
    email: 'email',
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello test1 test2"', () => {
      expect(appController.getHello(user)).toBe('Hello test1 test2!');
    });
  });
});
