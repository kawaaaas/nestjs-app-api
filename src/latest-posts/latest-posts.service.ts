import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LatestPostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getLatestPosts() {
    const latestPosts = await this.prisma.post.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          include: {
            profile: true,
          },
        },
      },
    });
    return latestPosts;
  }
}
