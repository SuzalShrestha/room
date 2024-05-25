import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import slugify from 'slugify';
import * as mongoose from 'mongoose';
import * as slug from 'mongoose-slug-updater'

mongoose.plugin(slug);

export enum RoomStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  RESERVED = 'reserved',
  UNDER_MAINTENANCE = 'under_maintenance',
  PENDING_APPROVAL = 'pending_approval',
  INACTIVE = 'inactive',
  REMOVED = 'removed',
}

@Schema({
  timestamps: true,
})
export class Room {
  //   @Prop({
  //     type: Types.ObjectId,
  //     ref: 'Owner',
  //     required: true,
  //   })
  //   owner: Types.ObjectId;
  @Prop({
    required: true,
  })
  owner: string;

  @Prop({ default: RoomStatus.PENDING_APPROVAL })
  roomStatus: RoomStatus;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  province: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  beds: number;

  @Prop({ required: true })
  bathrooms: number;

  @Prop({ required: true, type: [String] })
  features: string[];

  @Prop({ type: String, slug: "title", unique: true })
  slug: string;
}

const RoomSchema = SchemaFactory.createForClass(Room);
RoomSchema.plugin(slug)

export { RoomSchema };
