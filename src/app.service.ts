import { Injectable } from '@nestjs/common';

interface iUrer {
  id: number,
  name: string,
  description: string
}

interface iBody {
  name: string,
  description: string
}

const fakeDataBase: iUrer[] = []

@Injectable()
export class AppService {
  getItem(): iUrer[] {
    if (fakeDataBase.length === 0) throw new Error('The database is empty')

    return fakeDataBase;
  }

  postItem(obj: iBody): iUrer[] {
    if (!obj.name || !obj.description) throw new Error('There are incomplete fields')

    const newId: number = fakeDataBase.length === 0 ? 1 : fakeDataBase[fakeDataBase.length - 1].id + 1
    fakeDataBase.push({ id: newId, ...obj })

    return fakeDataBase;
  }

  putItem(id: string, obj: iBody): iUrer[] {
    if (!obj.name || !obj.description) throw new Error('There are incomplete fields')
    if (fakeDataBase.findIndex(el => el.id === +id) === -1) throw new Error('Such ID does not exist')

    const indexEl = fakeDataBase.findIndex(el => el.id === +id);
    if (indexEl !== -1) {
      fakeDataBase[indexEl] = { ...fakeDataBase[indexEl], ...obj };
    }

    return fakeDataBase;
  }

  deleteItem(id: string): iUrer[] {
    if (fakeDataBase.findIndex(el => el.id === +id) === -1) throw new Error('Such ID does not exist')

    const indexEl = fakeDataBase.findIndex(el => el.id === +id);
    if (indexEl !== -1) {
      fakeDataBase.splice(indexEl, 1);
    }

    return fakeDataBase;
  }
}
