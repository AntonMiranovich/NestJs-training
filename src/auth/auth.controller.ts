import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './auth.service';


interface iUrer {
  id: number,
  username: string,
  email: string,
  password: string
}

interface iBody {
  username: string,
  email: string,
  password: string
}

@Controller('/auth')
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Post('/register')
  postItem(@Body() obj: iBody): iUrer[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message
    }
  }

  @Post('/login')
  checkItem(@Body() obj: any):  string {
    try {
      return this.appService.checkItem(obj);
    } catch (error) {
      return error.message
    }
  }

}
