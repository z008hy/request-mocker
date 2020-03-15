import { Module } from '@nestjs/common';
import { ProxyController } from '../controller/proxy';
import { ProxyService } from '../service/proxy';

@Module({
  imports: [],
  controllers: [ProxyController],
  providers: [ProxyService],
})
export class ProxyModule {}
