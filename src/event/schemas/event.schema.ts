import { Location } from './location.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema({
    timestamps: true
})
export class Event extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true})
    location: Location;
}

export const EventSchema  =  SchemaFactory.createForClass(Event);
 