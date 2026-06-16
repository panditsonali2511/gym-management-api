import { Injectable } from '@nestjs/common';

@Injectable()
export class GymService {
  private gyms = [
    {
      id: 1,
      name: 'Gold Gym',
      location: 'Pune',
    },
  ];

  findAll() {
    return this.gyms;
  }

  create(gym) {
    this.gyms.push(gym);

    return {
      message: 'Gym added successfully',
    };
  }
}