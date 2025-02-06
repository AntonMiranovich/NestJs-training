import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


interface iUrer {
  id: number,
  name: string,
  description: string
}

@Controller()
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
  postItem(@Body() obj: any): iUrer[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message
    }

  }

  @Put('/:id')
  putItem(@Body() obj: any, @Param('id') id: string): iUrer[] | string {
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
