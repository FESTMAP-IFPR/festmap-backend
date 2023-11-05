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

    @Get(`find-all`)
    async findAll() {
        console.log(`find-all`);
        return this.userService.findAll();
    }

    @Post(`update`)
    async update(id: string, user: User) {
        return this.userService.update(id, user);
    }

    @Get(`find-one`)
    async findOne(id: string) {
        return this.userService.findOne(id);
    }
}