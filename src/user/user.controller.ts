import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { GenerateIdenticonService } from 'utils/generateIdenticon';

@Controller('auth/register')
export class UserController {
  constructor(
    private userService: UserService,
    private readonly generateIdenticonService: GenerateIdenticonService,
  ) {}

  @Post()
  async createUser(
    @Body() userData: { username: string; email: string; password: string },
  ) {
    const salt = await bcrypt.hash(userData.password, 10);

    const inputData = {
      username: userData.username,
      email: userData.email,
      password: salt,
      profile: {
        create: {
          bio: '初めまして',
          profileImageUrl: this.generateIdenticonService.generateIdenticon(
            userData.email,
          ),
        },
      },
    };

    this.userService.createUser(inputData);
  }
}
