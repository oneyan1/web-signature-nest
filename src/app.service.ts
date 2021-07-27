import { Injectable } from '@nestjs/common';
import { IUser } from './app.controller';

@Injectable()
export class AppService {
  getHello(): IUser[] {
    return [{ id: 1, name: 'test_user ' }];
  }
}
