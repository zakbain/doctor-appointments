import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity({name: 'doctor'})
export class Doctor {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;
}