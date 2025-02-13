import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './user.service';


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

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getItem(): iUrer[] | string {
    try {
      return this.appService.getItem();
    } catch (error) {
      return error.message
    }
  }

  @Post()
  postItem(@Body() obj: iBody): iUrer[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message
    }

  }

  @Put('/:id')
  putItem(@Body() obj:iBody, @Param('id') id: string): iUrer[] | string {
    try {
      return this.appService.putItem(id, obj);
    } catch (error) {
      return error.message
    }

  }

  @Delete('/:id')
  deleteItem(@Param('id') id: string): iUrer[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return error.message
    }
  }

}
