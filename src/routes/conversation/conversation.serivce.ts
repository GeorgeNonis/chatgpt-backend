import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationService {
  getHistory(): string {
    return 'Hello World!';
  }
}
