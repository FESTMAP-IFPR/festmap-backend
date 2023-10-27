import { IsDate, IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { LocationDto } from "./location.dto";
import { Type } from "class-transformer";

export class EventDto {
    @IsNotEmpty()
    nome: string;
    @IsNotEmpty()
    descricao: string;
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    data_hora_inicio : Date;
    @IsDate()
    @Type(() => Date)
    data_hora_fim : Date;
    @IsObject()
    @ValidateNested()
    @Type(() => LocationDto)
    localizacao: LocationDto;
}