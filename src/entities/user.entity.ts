import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "varchar", length: 200 })
  nome: string;
  @Column({ type: "varchar", length: 200 })
  email: string;
  @Column({ type: "varchar", length: 8 })
  data: string;
}

export { User };
