import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { AppService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class UsersModule { }
