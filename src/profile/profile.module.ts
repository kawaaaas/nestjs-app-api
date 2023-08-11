import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { PrismaService } from 'src/prisma.service';
import { ProfileController } from './profile.controller';

@Module({
  imports: [],
  providers: [ProfileService, PrismaService],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
