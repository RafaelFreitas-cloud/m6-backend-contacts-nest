/* eslint-disable prettier/prettier */

import { IsEmail, IsString, MaxLength } from 'class-validator';

//data transfer object
export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(15)
  phone: string;
}
