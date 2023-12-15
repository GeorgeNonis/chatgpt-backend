import { Module } from '@nestjs/common';
import { HistoryService } from './chat.service';
import { HistoryController } from './chat.controller';

@Module({
  imports: [],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
