import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events-find-by')
export class EventsFindByController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findBy(@Query() query: any) {
    console.log(query);
    const events = await this.eventsService.findByEventNameAndAddress(query);

    return events;
  }
}
