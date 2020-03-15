import { Injectable } from '@nestjs/common';

@Injectable()
export class ProxyService {
  get(): string {
    return 'Hello World!';
  }
}