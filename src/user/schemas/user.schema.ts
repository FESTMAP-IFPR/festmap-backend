import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema({
    timestamps: true
})
export class User {

    @Prop({ required: true })
    nome: string;

    @Prop({ required: false })
    foto?: string;

    @Prop({ required: true })
    cpf: string;

    @Prop({ required: true })
    data_de_nascimento: Date;

    @Prop({ required: true })
    sexo: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    senha: string;

    @Prop({ required: false })
    administrador: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);