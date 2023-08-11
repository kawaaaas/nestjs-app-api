import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [],
  providers: [PostsService, PrismaService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
