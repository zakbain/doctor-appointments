import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppointmentService, CreateAppointmentDto } from './appointment.service';

@Controller('doctors/:doctorId/appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) { }

  @Get()
  getAll(@Param('doctorId') doctorId: number) {
    return this.appointmentService.getByDoctorId(doctorId);
  }

  @Post()
  create(@Param('doctorId') doctorId: number, @Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(doctorId, createAppointmentDto)
  }
}
