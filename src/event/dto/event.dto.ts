import { IsDate, IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { LocationDto } from "./location.dto";
import { Type } from "class-transformer";
import { EnderecoDto } from "./endereco.dto";

export class EventDto {
    _id: string;
    @IsNotEmpty()
    nome: string;
    imagem: string;
    @IsNotEmpty()
    descricao: string;
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    data_hora_inicio: Date;
    @IsDate()
    @Type(() => Date)
    data_hora_fim: Date;
    @IsObject()
    @ValidateNested()
    @Type(() => LocationDto)
    localizacao: LocationDto;
    @IsNotEmpty()
    categoria: string;
    @IsNotEmpty()
    contato: string;
    @IsNotEmpty()
    classificacao: string;
    @IsObject()
    @ValidateNested()
    @Type(() => EnderecoDto)
    endereco: EnderecoDto;
}