import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../schemas/user.schema";

export class CreateUserDto{

    @ApiProperty({description: "First Name of the user.", example: "John"})
    @IsNotEmpty()
    @IsString()
    readonly firstName : string;

    @ApiProperty({description: "Last Name of the user.", example: "Doe"})
    @IsNotEmpty()
    @IsString()
    readonly lastName : string;

    @ApiProperty({description: "Email of the user.", example: "john.doe@gmail.com"})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    
    @ApiProperty({description: "Password of the user.", example: "********"})
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password: string;

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

    @ApiProperty({description: "Role of the user.", example: UserRole.USER, required: false})
    @IsOptional()
    @IsEnum(UserRole, {message: "Valid role is required eg. user, owner",})
    readonly role: UserRole
}