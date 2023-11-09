import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly nome: string;
    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter correct email"})
    readonly email: string;
    @IsNotEmpty() 
    @IsString()
    @MinLength(6)
    readonly senha: string;
}