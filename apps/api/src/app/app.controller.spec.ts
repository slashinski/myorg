import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return titles from service api', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual([{"title": "Todo 1"}, {"title": "Todo 2"}]);
    });
  });
});
