import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHistory(): string {
    return 'Hello World!';
  }
}
