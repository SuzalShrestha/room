import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomController {
    constructor(private roomService: RoomService){}
    @Get()
    async getAllRooms(): Promise<Room[]>{
        return this.roomService.getAllRooms();
    }
    @Post()
    async createRoom(
        @Body()
        room: CreateRoomDto
    ) : Promise<Room>{
        return this.roomService.createRoom(room);
    }
    @Get(":slug")
    async getRoomBySlug(
        @Param("slug")
        slug: string
    ){
        return this.roomService.findRoomBySlug(slug);
    }
    @Put(":id")
    async updateRoom(
        @Param("id")
        id: string,
        @Body()
        room: UpdateRoomDto
    ){
        return this.roomService.updateRoom(room, id);
    }
}
