import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';

@Controller('event')
export class EventController {
    constructor(
        private eventService: EventService
    ) { }

    @Post(`create`)
    async create(@Body() createEventDto: EventDto) {
        return this.eventService.create(createEventDto);
    }

    @Get(`find-all`)
    async findAll() {
        return this.eventService.findAll();
    }
}
