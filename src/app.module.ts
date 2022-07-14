import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './database/data-source';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(postgresConfig),
    DoctorModule,
    AppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
