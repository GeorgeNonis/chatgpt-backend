import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  getHistory(): string {
    return 'Hello World!';
  }
}
