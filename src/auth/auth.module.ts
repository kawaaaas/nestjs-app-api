import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWTCONSTANTS'),
          signOptions: {
            expiresIn: '1200s',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, PrismaService, JwtService, ConfigModule],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
