import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AppointmentService, CreateAppointmentDto } from './appointment.service';

@Controller('doctors/:doctorId/appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) { }


  @Get('byDates')
  getBetween(@Param('doctorId') doctorId: number, @Query() query) {
    return this.appointmentService.getByDoctorIdBetweenDates(doctorId, query.startDate, query.endDate);
  }

  @Get()
  getAll(@Param('doctorId') doctorId: number) {
    return this.appointmentService.getByDoctorId(doctorId);
  }

  @Post()
  create(@Param('doctorId') doctorId: number, @Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(doctorId, createAppointmentDto)
  }

  @Delete(':appointmentId')
  delete(@Param('doctorId') doctorId: number, @Param('appointmentId') appointmentId: number) {
    return this.appointmentService.delete(doctorId ,appointmentId);
  }
}
