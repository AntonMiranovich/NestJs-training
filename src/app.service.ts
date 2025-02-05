import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getItem(): string {
    return 'getHello';
  }

  postItem(obj: any): string {
    return obj;
  }

  putItem(id: string, obj: any): any {
    return [id, obj];
  }
  
  deleteItem(id: string): string {
    return `delete item ${id}`;
  }
}
