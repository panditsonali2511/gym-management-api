import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GymDocument = Gym & Document;

@Schema()
export class Gym {
  @Prop()
  name: string;

  @Prop()
  location: string;
}

export const GymSchema = SchemaFactory.createForClass(Gym);