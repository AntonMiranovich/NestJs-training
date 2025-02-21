import { Injectable } from '@nestjs/common';
import users from 'src/storage/user';


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


@Injectable()
export class AppService {
  postItem(obj: iBody): iUrer[] {
    if (!obj.username || !obj.email || !obj.password) throw new Error('There are incomplete fields')

    const newId: number = users.length === 0 ? 1 : users[users.length - 1].id + 1
    users.push({ id: newId, ...obj })

    return users;
  }

  checkItem(obj: any): string {
    if (!obj.username || !obj.password) throw new Error('There are incomplete fields')
    const checkUser = users.some((el) => el.username == obj.username && el.password == obj.password)

    return checkUser ? "Вход выполнен" : "Неверные данные";
  }

}
