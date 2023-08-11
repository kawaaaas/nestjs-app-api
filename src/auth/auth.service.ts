import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';
dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async loginUser(data: { email: string; password: String }) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordVaild = await bcrypt.compare(data.password, user.password);

    if (!isPasswordVaild) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { userId: user.id, username: user.username };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWTCONSTANTS,
      }),
    };
  }
}
