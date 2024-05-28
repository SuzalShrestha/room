import {IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto{

    @ApiProperty({description: "First Name of the user.", example: "John"})
    @IsNotEmpty()
    @IsString()
    readonly firstName : string;

    @ApiProperty({description: "Last Name of the user.", example: "Doe"})
    @IsNotEmpty()
    @IsString()
    readonly lastName : string;


    @ApiProperty({description: "Phone number of the user.", example: "9898989898", required: false})
    @IsOptional()
    @IsPhoneNumber()
    readonly phone: string;

    @ApiProperty({description: "Address of the user.", example: "Kathmandu Nepal", required: false})
    @IsOptional()
    @IsString()
    readonly address: string;

    @ApiProperty({description: "Profile picture of the user.", example:"https://example.com/profile.jpg", required: false})
    @IsOptional()
    @IsString()
    readonly profile: string;
}