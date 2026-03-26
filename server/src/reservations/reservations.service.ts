import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './schemas/reservation.schema';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const newRes = new this.reservationModel(createReservationDto);
    return await newRes.save();
  }

  async findAll(): Promise<Reservation[]> {
    return await this.reservationModel.find().exec();
  }

  async findOne(id: number): Promise<Reservation | null> {
    return await this.reservationModel.findById(id).exec();
  }

  // TA METODA BYŁA POWODEM BŁĘDU TS2339
  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation | null> {
    return await this.reservationModel.findByIdAndUpdate(id, updateReservationDto, { new: true }).exec();
  }

  // TA METODA RÓWNIEŻ BYŁA POWODEM BŁĘDU
  async remove(id: number): Promise<any> {
    return await this.reservationModel.findByIdAndDelete(id).exec();
  }
}