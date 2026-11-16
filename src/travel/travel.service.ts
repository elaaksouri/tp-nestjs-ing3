import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  create(createTravelDto: CreateTravelDto) {
    const newTrip = { id: this.trips.length + 1, ...createTravelDto };
    this.trips.push(newTrip);
    return newTrip;
  }

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    return this.trips.find((trip) => trip.id === id);
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
