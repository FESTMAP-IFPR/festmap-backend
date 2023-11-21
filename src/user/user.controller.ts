import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { User } from "./schemas/user.schema";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Post(`create`)
    async create(@Body() createUserDto: UserDto) {
        return this.userService.create(createUserDto);
    }

    @Post(`delete`)
    async delete(id: string) {
        return this.userService.delete(id);
    }

    @Post(`delete-by-email`)
    async deleteByEmail(@Body('email') email: string) {
        return this.userService.deleteByEmail(email);
    }

    @Post(`update`)
    async update(@Body() user: any) {
        return this.userService.update(user);
    }

    @Get(`find-by-id`)
    async findOne(id: string) {
        return this.userService.findOne(id);
    }

    @Get(`find-by-email`)
    async findByEmail(@Body('email') email: string) {
        return this.userService.findByEmail(email);
    }

    @Get(`find-all`)
    async findAll() {
        return this.userService.findAll();
    }

    @Post(`forgot-password`)
    async forgotPassword(@Body('email') email: string, @Body('cpf') cpf: string) {
        return this.userService.forgotPassword(email, cpf);
    }

    @Post(`login`)
    async login(@Body('email') email: string, @Body('senha') senha: string) {
        return this.userService.login(email, senha);
    }
}