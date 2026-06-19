import { Body, Controller, Get, Post,Put, Delete, Param } from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';


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
addGym(@Body() createGymDto: CreateGymDto) {
  console.log(createGymDto);

  return this.gymService.create(createGymDto);
}

@Put(':id')
update(
  @Param('id') id: string,
  @Body() updateGymDto: any,
) {
  return this.gymService.update(id, updateGymDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.gymService.remove(id);
}
}