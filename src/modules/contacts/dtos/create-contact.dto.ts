/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength } from 'class-validator';

//data transfer object
export class CreateContactDto {
  @ApiProperty({
    description: "Contact's name",
    default: "Hallysson",
    type: String,
})
  @IsString()
  name: string;

  @ApiProperty({
    description: "Contact's email",
    default: "hassinho@email.com",
    type: String,
})
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Contact's phone",
    default: "75 8888-9999",
    type: String,
})
  @IsString()
  @MaxLength(15)
  phone: string;
}
