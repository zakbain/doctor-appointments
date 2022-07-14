import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/database/entities';
import { Between, Repository } from 'typeorm';

export type CreateAppointmentDto = Omit<Appointment, 'id' | 'doctorId'>;

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) { }

  async getByDoctorId(doctorId: number) {
    return await this.appointmentRepository.findBy({ doctorId });
  }

  async getByDoctorIdBetweenDates(doctorId: number, startDate: Date, endDate: Date) {
    return await this.appointmentRepository.find({
      where: {
        doctorId: doctorId,
        startsAt: Between(startDate, endDate)
      }
    });
  }

  async create(doctorId: number, createDoctorDto: CreateAppointmentDto) {
    const appointmentToCreate = this.appointmentRepository.create(createDoctorDto);
    appointmentToCreate.doctorId = doctorId;
    return await this.appointmentRepository.save(appointmentToCreate);
  }

  async delete(doctorId: number, appointmentId: number) {
    return await this.appointmentRepository.delete({ doctorId: doctorId, id: appointmentId });
  }
}
