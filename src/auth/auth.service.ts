import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { SignUpDto } from "./dto/signup.dto";
import { UserService } from "src/user/user.service";
import { User } from "src/user/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    // private userService: UserService ,
    private jwtService: JwtService
  ) {}

  // async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
  //   const { nome, email, senha } = signUpDto;

  //   const hashedPassword = await bcrypt.hash(senha, 10);

  //   try {
      // const user = await this.userService.create({
      //   nome,
      //   email,
      //   senha: hashedPassword,
      // });

  //     const token = this.jwtService.sign({ id: senha });

  //     return { token };
  //   } catch (error) {
  //     if (error?.code === 11000) {
  //       throw new ConflictException("Duplicate Email Entered");
  //     }
  //   }
  // }

  // async login(loginDto: LoginDto): Promise<{ token: string }> {
  //   const { email, password } = loginDto;

  //   const user = await this.userService.findOne({ email });

  //   if (!user) {
  //     throw new UnauthorizedException("Invalid email or password");
  //   }

  //   const isPasswordMatched = await bcrypt.compare(password, user.password);

  //   if (!isPasswordMatched) {
  //     throw new UnauthorizedException("Invalid email or password");
  //   }

  //   const token = this.jwtService.sign({ id: user._id });

  //   return { token };
  // }
}
