import { Injectable } from '@nestjs/common';
import orders from 'src/storage/order';

interface iUrer {
  id: number,
  userId: number,
  itemName: string
}

interface iBody {
  userId: number,
  itemName: string
}



@Injectable()
export class AppService {
  getItem(): iUrer[] {
    if (orders.length === 0) throw new Error('The database is empty')

    return orders;
  }

  postItem(obj: iBody): iUrer[] {
    if (!obj.userId || !obj.itemName) throw new Error('There are incomplete fields')

    const newId: number = orders.length === 0 ? 1 : orders[orders.length - 1].id + 1
    orders.push({ id: newId, ...obj })

    return orders;
  }

}
