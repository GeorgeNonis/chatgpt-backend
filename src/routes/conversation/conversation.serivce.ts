import { Injectable } from '@nestjs/common';
import { fileContent } from 'utils';

@Injectable()
export class ConversationService {
  async getConversations() {
    const convs = await fileContent();
    return convs;
  }

  async getConversation(id: string) {
    const conversationLog = await fileContent();

    const findConv = conversationLog.find((cnv) => cnv.id === id);
    if (findConv === undefined) {
      return { status: 404, message: 'No conversation found' };
    } else {
      return findConv;
    }
  }

  addConversation(id: string) {
    console.log({ id });
  }
  updateConversation(id: string) {
    console.log({ id });
  }
}
