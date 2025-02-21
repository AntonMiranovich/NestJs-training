import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";

export function check(req: Request, res: Response, next: NextFunction) {
    console.log('+');
    next()
}


// @Injectable()
// export class Valid implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('valid');
//         next()
//     }
// }