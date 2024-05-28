import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto{

    @ApiProperty({description: "Email of the user", example: "john.doe@gmail.com", required: true})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({description: "Password of the user", example: "********", required: true})
    @IsNotEmpty()
    readonly pass: string;
}