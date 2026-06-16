import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { GymService } from './gym.service';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getAllGyms() {
    return this.gymService.findAll();
  }
  @Get(':id')
findOne(@Param('id') id: string) {

  console.log(id);

  return {
    id: id,
  };
}

@Post()
addGym(@Body() body) {

  console.log(body);

  return this.gymService.create(body);
}
}