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
  getItem(): iUrer[] {
    if (users.length === 0) throw new Error('The database is empty')

    return users;
  }

  postItem(obj: iBody): iUrer[] {
    if (!obj.username || !obj.email || !obj.password) throw new Error('There are incomplete fields')

    const newId: number = users.length === 0 ? 1 : users[users.length - 1].id + 1
    users.push({ id: newId, ...obj })

    return users;
  }

  putItem(id: string, obj: iBody): iUrer[] {
    if (!obj.username || !obj.email || !obj.password) throw new Error('There are incomplete fields')
    if (users.findIndex(el => el.id === +id) === -1) throw new Error('Such ID does not exist')

    const indexEl = users.findIndex(el => el.id === +id);
    users[indexEl] = { ...users[indexEl], ...obj };

    return users;
  }

  deleteItem(id: string): iUrer[] {
    if (users.findIndex(el => el.id === +id) === -1) throw new Error('Such ID does not exist')

    const indexEl = users.findIndex(el => el.id === +id);
    users.splice(indexEl, 1);

    return users;
  }
}
