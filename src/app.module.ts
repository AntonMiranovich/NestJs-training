import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module'
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UsersModule, AuthModule, OrderModule],
})
export class AppModule { }
