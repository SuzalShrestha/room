import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import slugify from 'slugify';
import * as mongoose from 'mongoose';
import * as slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

export enum RoomStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  UNDER_MAINTENANCE = 'under_maintenance',
  REMOVED = 'removed',
}

export enum RoomDocumentStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

@Schema({
  timestamps: true,
})
export class Room {
  @ApiProperty({ description: 'Owner Details', example: 'Bhuwan Acharya' })
  @Prop({ required: true })
  owner: string;

  @ApiProperty({ description: 'Room Status',enum: RoomStatus, example: RoomStatus.AVAILABLE })
  @Prop({ default: RoomStatus.AVAILABLE })
  roomStatus: RoomStatus;

  @ApiProperty({
    description: 'Status of the room document',
    enum: RoomDocumentStatus,
    example: RoomDocumentStatus.PENDING,
  })
  @Prop({ default: RoomDocumentStatus.PENDING })
  status: RoomDocumentStatus;

  @ApiProperty({ description: 'Title of the room', example: 'Luxury Suite' })
  @Prop()
  title: string;

  @ApiProperty({ description: 'Description of the room', example: 'A luxurious suite with a sea view' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Images of the room', type: [String], example: ['image1.jpg', 'image2.jpg'] })
  @Prop({ type: [String] })
  images: string[];

  @ApiProperty({ description: 'Room number', example: 2 })
  @Prop({ required: true })
  number: number;

  @ApiProperty({ description: 'Province where the room is located', example: 'Gandaki' })
  @Prop({ required: true })
  province: string;

  @ApiProperty({ description: 'City where the room is located', example: 'Pokhara' })
  @Prop({ required: true })
  city: string;

  @ApiProperty({ description: 'Address of the room', example: 'Lakeside, Pokhara' })
  @Prop({ required: true })
  address: string;

  @ApiProperty({ description: 'Price of the room per month', example: 3000 })
  @Prop({ required: true })
  price: number;

  @ApiProperty({ description: 'Number of beds in the room', example: 2 })
  @Prop({ required: true })
  beds: number;

  @ApiProperty({ description: 'Number of bathrooms in the room', example: 1 })
  @Prop({ required: true })
  bathrooms: number;

  @ApiProperty({ description: 'Features of the room', type: [String], example: ['WiFi', 'Air Conditioning'] })
  @Prop({ required: true, type: [String] })
  features: string[];

  @ApiProperty({ description: 'Slug for the room URL', example: 'luxury-suite', uniqueItems: true })
  @Prop({ type: String, slug: 'title', unique: true })
  slug: string;
}

const RoomSchema = SchemaFactory.createForClass(Room);
RoomSchema.plugin(slug);

export { RoomSchema };
