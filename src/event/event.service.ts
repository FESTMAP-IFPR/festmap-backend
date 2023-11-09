import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDto } from './dto/event.dto';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: Model<Event>
    ) { }

    async create(createEventDto: EventDto): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }

    async update(updateEventDto: EventDto): Promise<Event> {
        const updatedEvent = await this.eventModel.findByIdAndUpdate(
            { _id: updateEventDto._id },
            updateEventDto,
            { new: true }
        );
        return updatedEvent;
    }

    async findAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async findById(id: string): Promise<Event> {
        return this.eventModel.findById(id).exec();
    }

    async delete(id: string): Promise<Event> {
        return this.eventModel.findByIdAndDelete(id).exec();
    }
}
