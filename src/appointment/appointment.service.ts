import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/database/entities';
import { Repository } from 'typeorm';

export type CreateAppointmentDto = Omit<Appointment, 'id' | 'doctorId' >;

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) { }

  async getByDoctorId(doctorId) {
    return await this.appointmentRepository.findBy({ doctorId });
  }

  async create(doctorId: number, createDoctorDto: CreateAppointmentDto) {
    const doctorToCreate = this.appointmentRepository.create(createDoctorDto);
    doctorToCreate.doctorId = doctorId;
    return await this.appointmentRepository.save(doctorToCreate);
  }
}
