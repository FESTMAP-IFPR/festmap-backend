import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { singUpDto } from './dto/singup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post(`/signup`)
    singUp(@Body() signUpDto: singUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    // create a end point get login
    @Get(`/login`)
    login(@Body() loginDto: LoginDto): Promise<{ token: string}> {
        return this.authService.login(loginDto);
    }
}
