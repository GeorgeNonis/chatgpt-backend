import { Injectable } from '@nestjs/common';
import { fileContent } from 'utils';

@Injectable()
export class ConversationService {
  async getConversations() {
    const convs = await fileContent();
    return convs;
  }

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
