import { IsNotEmpty, IsString, IsInt, IsArray, IsOptional, IsEnum } from "class-validator";
import { RoomStatus } from "../schemas/room.schema";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateRoomDto {
    @ApiProperty({ description: 'Owner of the room', example: 'Bhuwan Acharya' , required: false})
    @IsOptional()
    @IsString()
    readonly owner: string;
    
    @IsOptional()
    @IsEnum(RoomStatus, {message: "Valid room status is required."})
    readonly roomStatus : RoomStatus
    
    @ApiProperty({ description: 'Title of the room', example: 'Luxury Suite' , required: false})
    @IsOptional()
    @IsString()
    readonly title: string;
    
    @ApiProperty({ description: 'Description of the room', example: 'A luxurious suite with a sea view' , required: false})
    @IsOptional()
    @IsString()
    readonly description: string;

    @ApiProperty({ description: 'Images of the room', type: [String], example: ['image1.jpg', 'image2.jpg'] , required: false})
    @IsOptional()
    @IsArray()
    readonly images: string[];

    @ApiProperty({ description: 'Room number', example: 101 , required: false})
    @IsOptional()
    @IsInt()
    readonly number: number;

    @ApiProperty({ description: 'Province where the room is located', example: 'Gandaki' , required: false})
    @IsOptional()
    @IsString()
    readonly province: string;

    @ApiProperty({ description: 'City where the room is located', example: 'Pokhara' , required: false})
    @IsOptional()
    @IsString()
    readonly city: string;

    @ApiProperty({ description: 'Address of the room', example: 'Lakeside, Pokhara' , required: false})
    @IsOptional()
    @IsString()
    readonly address: string;

    @ApiProperty({ description: 'Price of the room per month', example: 3000 , required: false})
    @IsOptional()
    @IsInt()
    readonly price: number;

    @ApiProperty({ description: 'Number of beds in the room', example: 2 , required: false})
    @IsOptional()
    @IsInt()
    readonly beds: number;

    @ApiProperty({ description: 'Number of bathrooms in the room', example: 1, required: false})
    @IsOptional()
    @IsInt()
    readonly bathrooms: number;

    @ApiProperty({ description: 'Features of the room', type: [String], example: ['WiFi', 'Air Conditioning'], required: false})
    @IsOptional()
    @IsArray()
    readonly features: string[];
}
