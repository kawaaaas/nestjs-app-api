import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(data) {
    if (!data.content) {
      const error = '投稿できません';
      return error;
    }
    const newPost = await this.prisma.post.create({
      data: {
        content: data.content,
        authorId: data.userId,
      },
      include: {
        author: {
          include: {
            profile: true,
          },
        },
      },
    });
    return newPost;
  }
}
