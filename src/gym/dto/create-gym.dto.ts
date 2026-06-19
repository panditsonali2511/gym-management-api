import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGymDto {
  @ApiProperty({
    example: 'Gold Gym',
    description: 'Name of the gym',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Pune',
    description: 'Location of the gym',
  })
  @IsString()
  @IsNotEmpty()
  location: string;
}