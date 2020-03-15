import { Controller, Get } from '@nestjs/common';
import { ProxyService } from '../service/proxy';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get()
  get(): string {
    return this.proxyService.get();
  }
}
