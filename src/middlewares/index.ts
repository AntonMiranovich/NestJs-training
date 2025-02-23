import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";

export function check(req: Request, res: Response, next: NextFunction) {
    const { username, email, password } = req.body
    if (!username) console.log('username');
    if (!email) console.log('email');
    if (!password) console.log('password');

    next()
}


// @Injectable()
// export class Valid implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('valid');
//         next()
//     }
// }