import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema({
    timestamps: true
})
export class Location extends Document  {
        @Prop({ required: true })
        type: string;
        @Prop()
        coordinates: number[] | [[Number]];
    }