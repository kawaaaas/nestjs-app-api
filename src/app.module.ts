import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { LatestPostsController } from './latest-posts/latest-posts.controller';
import { LatestPostsModule } from './latest-posts/latest-posts.module';
import { AuthMiddleware } from 'middlewares/isAuthenticated';
import { FindUserController } from './find-user/find-user.controller';
import { FindUserService } from './find-user/find-user.service';
import { FindUserModule } from './find-user/find-user.module';
import { GenerateIdenticonService } from 'utils/generateIdenticon';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PostsModule,
    LatestPostsModule,
    FindUserModule,
    ProfileModule,
  ],
  controllers: [
    AppController,
    UserController,
    AuthController,
    PostsController,
    LatestPostsController,
    FindUserController,
    ProfileController,
  ],
  providers: [
    AppService,
    UserService,
    PrismaService,
    AuthService,
    JwtService,
    PostsService,
    FindUserService,
    GenerateIdenticonService,
    ProfileService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('posts');
    consumer.apply(AuthMiddleware).forRoutes('find-user');
  }
}
