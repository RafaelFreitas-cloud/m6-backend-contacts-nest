/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: "User's name",
    default: "Joana",
    type: String,
})
  @IsString()
  name: string;

  @ApiProperty({
    description: "User's email",
    default: "joana@email.com",
    type: String,
})
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User's phone",
    default: "71 6666-6666",
    type: String,
})
  @IsString()
  @MaxLength(15)
  phone: string;

  @ApiProperty({
    description: "User's password",
    default: "123456",
    type: String,
})
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
