import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocumentStatus, RoomStatus } from './schemas/room.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name)
    private roomModel: mongoose.Model<Room>,
  ) {}
  async getAllRooms(query: Query): Promise<Room[]> {
    const resultPerPage = 10;
    const page = Number(query.page) || 1;
    const skips = resultPerPage * (page - 1);
    const searchFilter = query.search
      ? {
          roomStatus: RoomStatus.AVAILABLE,
          status: RoomDocumentStatus.APPROVED,
          $or: [
            {
              title: {
                $regex: query.search,
                $options: 'i',
              },
              description: {
                $regex: query.search,
                $options: 'i',
              },
              province: {
                $regex: query.search,
                $options: 'i',
              },
              city: {
                $regex: query.search,
                $options: 'i',
              },
              address: {
                $regex: query.search,
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const books = await this.roomModel
      .find(searchFilter)
      .limit(resultPerPage)
      .skip(skips);
    return books;
  }
  async isDuplicateRoom(room: CreateRoomDto): Promise<boolean> {
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

  async createRoom(room: CreateRoomDto): Promise<Room> {
    if (await this.isDuplicateRoom(room)) {
      throw new BadRequestException('Duplicate entry of a room!');
    }
    const createdRoom = await this.roomModel.create(room);
    return createdRoom;
  }

  async findRoomBySlug(slug: string): Promise<Room> {
    const room = await this.roomModel.findOne({
      slug,
    });
    if (!room) throw new NotFoundException('No room found!');
    return room;
  }

  async updateRoom(room: UpdateRoomDto, id: string): Promise<Room> {
    const updatedRoom = await this.roomModel.findByIdAndUpdate(
      id,
      { ...room, status: RoomDocumentStatus.PENDING },
      { new: true },
    );
    if (!updatedRoom) throw new NotFoundException('Room not found!');
    return updatedRoom;
  }
}
