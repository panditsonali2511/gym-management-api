import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gym, GymDocument } from './schemas/gym.schema';

@Injectable()
export class GymService {
  constructor(
    @InjectModel(Gym.name)
    private gymModel: Model<GymDocument>,
  ) {}

  async findAll(): Promise<Gym[]> {
    return this.gymModel.find().exec();
  }

  async create(gym: any): Promise<Gym> {
    const newGym = new this.gymModel(gym);
    return newGym.save();
  }

  async update(id: string, updateGymDto: any) {
  return this.gymModel.findByIdAndUpdate(
    id,
    updateGymDto,
    { new: true }
  );
}

async remove(id: string) {
  return this.gymModel.findByIdAndDelete(id);
}
}