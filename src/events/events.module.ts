import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schemas/event.schema';
import { EventsFindByController } from './events-find-by.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Event', schema: EventSchema }
    ])
  ],
  controllers: [EventsController,EventsFindByController],
  providers: [EventsService]
})
export class EventsModule {}
