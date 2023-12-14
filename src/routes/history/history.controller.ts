import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller()
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  getHello(): string {
    return this.historyService.getHistory();
  }
}
