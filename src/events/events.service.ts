import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  Types } from 'mongoose';

@Injectable()
export class EventsService {

  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<Event>
) { }



  async create(createEventDto: CreateEventDto) {
  
    const event = await new this.eventModel({
      ...createEventDto,
      _id: new Types.ObjectId(),
      usuarioId: this.convertStringToObjectId(createEventDto.usuario_id)
    });
    return event.save();
  }

  findAll() {
    return this.eventModel.find().exec();
  }

  findOne(id: string) {
    return this.eventModel.findById(this.convertStringToObjectId(id)).exec();
  }

  findByUsuarioId(usuarioId: string) {
    return this.eventModel.find({ usuarioId: this.convertStringToObjectId(usuarioId) }).exec();
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
  }


  remove(id: string) {
    return this.eventModel.findByIdAndRemove(this.convertStringToObjectId(id)).exec();
  }

  private convertStringToObjectId = (id:string) => {
    return new Types.ObjectId(id);
  }
}
