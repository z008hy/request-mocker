import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("request", { schema: "rm_db" })
export class Request {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "note", length: 1000 })
  note: string;

  @Column("timestamp", {
    name: "create_time",
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date;

  @Column("timestamp", {
    name: "update_time",
    default: () => "CURRENT_TIMESTAMP"
  })
  updateTime: Date;

  @Column("varchar", { name: "name", length: 60 })
  name: string;

  @Column("varchar", { name: "type", length: 10 })
  type: string;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("varchar", { name: "params", length: 1000 })
  params: string;

  @Column("varchar", { name: "headers", length: 1000 })
  headers: string;

  @Column("varchar", { name: "mocker", length: 1000 })
  mocker: string;
}
