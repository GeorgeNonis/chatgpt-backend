import { ConversationI } from 'src/app.types';

export interface UpdateConvI {
  convId: ConversationI['id'];
  messages: ConversationI['messages'];
}
