import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './order.service';


interface iUrer {
  id: number,
  userId: number,
  itemName: string
}

interface iBody {
  userId: number,
  itemName: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/orders')
  getItem(): iUrer[] | string {
    try {
      return this.appService.getItem();
    } catch (error) {
      return error.message
    }
  }

  @Post('/orders')
  postItem(@Body() obj: iBody): iUrer[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message
    }

  }

}
