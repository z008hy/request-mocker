import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Request } from '../module/request/request.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'rm_db',
  synchronize: false,
  logging: true,
  entities: [ Request ]
};
