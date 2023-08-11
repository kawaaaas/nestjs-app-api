import {
  Header,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction } from 'connect';

const jwt = require('jsonwebtoken');

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
      throw new UnauthorizedException();
    }

    jwt.verify(token, process.env.JWTCONSTANTS, (err, decoded) => {
      if (err) {
        throw new UnauthorizedException();
      }

      req.userId = decoded.userId;

      next();
    });
  }
}
