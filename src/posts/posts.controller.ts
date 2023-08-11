import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  async createPost(@Body() inputData: { content: string }, @Req() req: any) {
    const data = {
      content: inputData.content,
      userId: req.userId,
    };
    const newPost = this.postService.createPost(data);
    return newPost;
  }
}
