import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';

@Controller('event')
export class EventController {

    constructor(
        private eventService: EventService
    ) { }

    @Post(`update`)
    async update(@Body() updateEventDto: EventDto) {
        return this.eventService.update(updateEventDto);
    }

    @Post(`create`)
    async create(@Body() createEventDto: EventDto) {
        return this.eventService.create(createEventDto);
    }

    @Get(`find-all`)
    async findAll() {
        return this.eventService.findAll();
    }

    @Get(`find-by-id`)
    async findOne(@Body('id') id: string) {
        return this.eventService.findById(id);
    }

    @Get(`delete`)
    async delete(@Body('id') id: string) {
        return this.eventService.delete(id);
    }
}
