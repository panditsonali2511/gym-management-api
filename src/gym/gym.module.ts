import { Module } from '@nestjs/common';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';


@Module({
  controllers: [GymController],
  providers: [GymService],
  imports: [GymModule]
})
export class GymModule {}
