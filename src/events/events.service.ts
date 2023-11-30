import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  Types } from 'mongoose';
import { Event } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<Event>
  ) {}

  async create(createEventDto: CreateEventDto) {
    console.log(createEventDto);
    const event = await new this.eventModel({
      ...createEventDto,
      _id: new Types.ObjectId(),
      usuarioId: this.convertStringToObjectId(createEventDto.usuario_id),
    });
    return event.save();
  }

  findAll() {
    return this.eventModel.find().exec();
  }

  findOne(id: string) {
    return this.eventModel.findById(this.convertStringToObjectId(id)).exec();
  }

  findByEventNameAndAddress(query:any) {
    console.log(query);
    const {event_name, address_name , user_id } = query;

    const userMatch = {
      usuario_id: this.convertStringToObjectId(user_id)
    }

    const eventMatch = { 
      nome: { $regex: event_name, $options: "i" } 
    };
  
    const addressMatch = { 
      $expr: {
        $regexMatch: {
          input: {
            $concat: [
              "$endereco.pais",
              "$endereco.estado",
              "$endereco.cidade",
              "$endereco.bairro",
              "$endereco.rua",
              "$endereco.numero",
              "$endereco.cep",
            ],
          },
          regex: address_name,
          options: "i"
        }
      }
    };
  
    try {
      const pipeline = [];

      if(user_id) {
        pipeline.push({ $match: userMatch});
      }

      if (event_name && (event_name.length !== 0 )) {
        pipeline.push({ $match: eventMatch });
      }
      if (address_name && address_name.length  !== 0 ) {
        pipeline.push({ $match: addressMatch });
      }
      if (pipeline.length === 0) {
        return this.eventModel.find().exec();
      }
      return this.eventModel.aggregate(pipeline);
    } catch (error) {
      console.log(error); 
    }
  }

  findByUsuarioId(usuarioId: string) {
    return this.eventModel
      .find({ usuarioId: this.convertStringToObjectId(usuarioId) })
      .exec();
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel
      .findByIdAndUpdate(id, updateEventDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.eventModel
      .findByIdAndRemove(this.convertStringToObjectId(id))
      .exec();
  }

  private convertStringToObjectId = (id: string) => {
    return new Types.ObjectId(id);
  };
}
