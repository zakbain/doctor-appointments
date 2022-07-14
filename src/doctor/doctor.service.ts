import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/database/entities';
import { Repository } from 'typeorm';

export type CreateDoctorDto = Omit<Doctor, 'id'>;

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) { }

  async getAll() {
    return await this.doctorRepository.find();
  }

  async create(createDoctorDto: CreateDoctorDto) {
    const doctorToCreate = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(doctorToCreate);
  }
}
