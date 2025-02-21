import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './user.controller';
import { AppService } from './user.service';
import { check } from 'src/middlewares';
// import { Valid } from 'src/middlewares';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class UsersModule {
  configure(test:any) {
    test.apply(check).forRoutes(AppController)
    test.apply(check).forRoutes({ path: '/', method: RequestMethod.GET })


    // test.apply(Valid).forRoutes(AppController)
  }
}
