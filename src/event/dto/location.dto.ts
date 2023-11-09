import { IsNotEmpty } from "class-validator";

export class LocationDto {
    _id: string;
    // @IsNotEmpty()
    type: string;
    // @IsNotEmpty()
    coordinates: number[] | [[Number]];
}