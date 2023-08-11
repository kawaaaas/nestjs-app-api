import { Controller, Get, Req } from '@nestjs/common';
import { FindUserService } from './find-user.service';

@Controller('find-user')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) {}

  @Get()
  async findUser(@Req() req: any) {
    const userId = req.userId as number;
    const user = this.findUserService.findUser(userId);
    return user;
  }
}
