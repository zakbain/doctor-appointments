import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/database/entities';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
