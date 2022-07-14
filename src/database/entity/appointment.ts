import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity({name: 'appointment'})
export class Appointment {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column("int")
  doctorId: number;

  @Column("varchar")
  patientFirstName: string;

  @Column("varchar")
  patientLastName: string;

  @Column({type: 'timestamp'})
  startsAt: Date;

  @Column({ type: "varchar" })
  type: string;
}