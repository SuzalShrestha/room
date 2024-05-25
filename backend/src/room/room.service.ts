import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomStatus } from './schemas/room.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name)
    private roomModel: mongoose.Model<Room>,
  ) {}
  async getAllRooms(): Promise<Room[]> {
    const books = await this.roomModel.find();
    return books;
  }
  async isDuplicateRoom(room: Room): Promise<boolean> {
    const { title, address, owner, province, city } = room;
    const existingRoom = await this.roomModel.findOne({
      title,
      address,
      owner,
      province,
      city,
    });
    return !!existingRoom;
  }

  async createRoom(room: Room): Promise<Room> {
    if(await this.isDuplicateRoom(room)){
        throw new BadRequestException('Duplicate entry of a room!');
    }
    const createdRoom = await this.roomModel.create(room);
    return createdRoom;
  }

  async findRoomBySlug(slug:string): Promise<Room>{
    const room = await this.roomModel.findOne({
        slug
    });
    if(!room) throw new NotFoundException("No room found!")
    return room;
  }

  async updateRoom(room: Room, id: string): Promise<Room>{
    const updatedRoom = await this.roomModel.findByIdAndUpdate(id, {...room, roomStatus: RoomStatus.PENDING_APPROVAL}, {new: true})
    if(!updatedRoom) throw new NotFoundException("Room not found!")
    return updatedRoom;
  }
}
