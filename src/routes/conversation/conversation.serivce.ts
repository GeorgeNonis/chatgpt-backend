import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationService {
  getConversations() {}

  getConversation(id: string) {
    console.log({ id });
  }

  addConversation(id: string) {
    console.log({ id });
  }
  updateConversation(id: string) {
    console.log({ id });
  }
}
