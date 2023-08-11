import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { GenerateIdenticonService } from 'utils/generateIdenticon';

@Module({
  imports: [],
  providers: [UserService, PrismaService, GenerateIdenticonService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
