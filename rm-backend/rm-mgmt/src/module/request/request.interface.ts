import { Request } from '../../entity/request.entity';

export interface RequestsRO {
  requests: Request[];
  count: number;
}