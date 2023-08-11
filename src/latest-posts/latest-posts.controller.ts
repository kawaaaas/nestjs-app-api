import { Controller, Get } from '@nestjs/common';
import { LatestPostsService } from './latest-posts.service';

@Controller('latest-posts')
export class LatestPostsController {
  constructor(private readonly latestPostService: LatestPostsService) {}

  @Get()
  async getLatestPost() {
    const latestPosts = await this.latestPostService.getLatestPosts();
    return latestPosts;
  }
}
