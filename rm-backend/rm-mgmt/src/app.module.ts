import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db'
import { proxyMiddleware } from './middlewares/proxy';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './module/proxy/proxy.module';
import { MockModule } from './module/mock/mock.module';
import { RequestModule } from './module/request/request.module';

@Module({
  imports: [
    ProxyModule,
    MockModule,
    RequestModule,
    TypeOrmModule.forRoot(dbConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
    .apply(proxyMiddleware)
    .forRoutes({ path: '/proxy', method: RequestMethod.ALL });
  }
}
