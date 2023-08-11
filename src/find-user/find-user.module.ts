import { Module } from '@nestjs/common';
import { FindUserService } from './find-user.service';
import { PrismaService } from 'src/prisma.service';
import { FindUserController } from './find-user.controller';

@Module({
  imports: [],
  providers: [FindUserService, PrismaService],
  controllers: [FindUserController],
  exports: [FindUserService],
})
export class FindUserModule {}
