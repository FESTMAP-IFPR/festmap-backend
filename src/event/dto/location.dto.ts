import { IsNotEmpty } from "class-validator";

export class LocationDto {
    @IsNotEmpty()
    type: string;
    @IsNotEmpty()
    coordinates: number[] | [[Number]];
}