import { IsDate, IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { LocationDto } from "./location.dto";
import { Type } from "class-transformer";

export class EventDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date: Date;
    @IsObject()
    @ValidateNested()
    @Type(() => LocationDto)
    location: LocationDto;
}