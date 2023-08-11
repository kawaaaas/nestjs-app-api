import { Module } from '@nestjs/common';
import { LatestPostsService } from './latest-posts.service';
import { PrismaService } from 'src/prisma.service';
import { LatestPostsController } from './latest-posts.controller';

@Module({
  imports: [],
  providers: [LatestPostsService, PrismaService],
  controllers: [LatestPostsController],
  exports: [LatestPostsService],
})
export class LatestPostsModule {}
