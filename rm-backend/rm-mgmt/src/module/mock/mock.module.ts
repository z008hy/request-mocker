import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';

@Module({
  imports: [],
  controllers: [MockController],
})
export class MockModule {}
