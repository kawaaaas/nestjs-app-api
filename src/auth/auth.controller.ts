import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async Login(@Body() loginData: { email: string; password: String }) {
    const response = await this.authService.loginUser(loginData);
    return response;
  }
}
