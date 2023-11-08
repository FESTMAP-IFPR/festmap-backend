import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "./dto/user.dto";
import { User } from "./schemas/user.schema";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) { }

    generateRandomPassword() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    async create(createUserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    async update(id: string, user: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email: email });
    }

    async forgotPassword(email: string, cpf: string): Promise<string> {
        const usuario = await this.userModel.findOne({ email: email });
        if (usuario) {
            const nova_senha = this.generateRandomPassword();
            usuario.senha = nova_senha;
            await this.userModel.findByIdAndUpdate(usuario._id, usuario, { new: true });
            if (usuario.cpf === cpf) {
                return "Sua nova senha: " + nova_senha;
            } else {
                return "Email ou CPF não cadastrado";
            }
        } else {
            return "Email não cadastrado";
        }
    }    
}