import { IsNotEmpty } from "class-validator";

export class EnderecoDto {
    _id: string;
    // @IsNotEmpty()
    pais: string;
    // @IsNotEmpty()
    estado: string;
    // @IsNotEmpty()
    cidade: string;
    // @IsNotEmpty()
    bairro: string;
    // @IsNotEmpty()
    rua: string;
    // @IsNotEmpty()
    numero: string;
}