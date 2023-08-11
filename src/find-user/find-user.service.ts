import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FindUserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const userInfo = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    return userInfo;
  }
}
