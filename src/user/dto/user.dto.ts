import { IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class UserDto {
    @IsNotEmpty()
    nome: string;
    foto?: string;
    @IsNotEmpty()
    cpf: string;
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    data_de_nascimento: Date;
    @IsNotEmpty()
    sexo: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    senha: string;

}