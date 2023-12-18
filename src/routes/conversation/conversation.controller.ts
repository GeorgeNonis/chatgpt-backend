import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ConversationService } from './conversation.serivce';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  getConversations() {
    return this.conversationService.getConversations();
  }
  @Get(':id')
  getConversation(@Param('id') id: string) {
    return this.conversationService.getConversation(id);
  }
  @Post()
  addConversation(@Param('id') id: string) {
    return this.conversationService.addConversation(id);
  }
  @Patch(':id')
  updateConversation(@Param('id') id: string) {
    return this.conversationService.addConversation(id);
  }
}
