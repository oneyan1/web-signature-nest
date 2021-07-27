import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface IUser {
  id: number;
  name: string;
}

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}
  @Get('/users')
  getUsers(): IUser[] {
    return this.appService.getHello();
  }
}
