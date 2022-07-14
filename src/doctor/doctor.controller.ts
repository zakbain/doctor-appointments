import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDoctorDto, DoctorService } from './doctor.service';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) { }
  
  @Get()
  getAll() {
    return this.doctorService.getAll();
  }

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }
}
