import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getItem(): string {
    return this.appService.getItem();
  }

  @Post()
  postItem(@Body() obj: any): string {
    return this.appService.postItem(obj);
  }

  @Put('/:id')
  putItem(@Body() obj: any, @Param('id') id: string): string {
    return this.appService.putItem(id, obj);
  }

  @Delete('/:id')
  deleteItem(@Param('id') id: string): string {
    return this.appService.deleteItem(id);
  }

}
