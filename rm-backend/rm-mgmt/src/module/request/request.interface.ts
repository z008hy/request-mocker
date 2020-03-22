import { Request } from './request.entity';

export interface RequestsRO {
  items: Request[];
  total: number;
  current: number,
  pageSize: number,
}