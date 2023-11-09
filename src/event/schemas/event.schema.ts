import { Location } from './location.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from 'mongoose';


@Schema({
    timestamps: true
})
export class Event extends Document {

    @Prop({ ref: 'User', type: SchemaTypes.ObjectId })
    usuario_id: Types.ObjectId;

    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    descricao: string;

    @Prop({ required: true })
    classificacao: string;

    @Prop({ required: true })
    categoria: string;

    @Prop({ required: false })
    contato: string;

    @Prop({ required: true })
    data_hora_inicio: Date;

    @Prop({ required: false })
    data_hora_fim: Date;

    @Prop({ required: true })
    localizacao: Location;

    @Prop({ required: false, type: Object })
    endereco: {
        pais: string,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: number,
        cep: string
    }
}

export const EventSchema = SchemaFactory.createForClass(Event);