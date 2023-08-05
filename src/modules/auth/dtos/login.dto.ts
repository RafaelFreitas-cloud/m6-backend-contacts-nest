/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class LoginDto {
    @ApiProperty({
        description: "User's email",
        default: "example@email.com",
        type: String,
    })
    @IsEmail()
    email:string

    @ApiProperty({
        description: "User's password",
        default: "123456",
        type: String
    })
    @IsString()
    password:string
}