import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {
  ApiCreatedResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'All rooms fetched.',
    type: Room,
    isArray: true,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  async getAllRooms(@Query() query: ExpressQuery): Promise<Room[]> {
    return this.roomService.getAllRooms(query);
  }

  @Get(':slug')
  @ApiResponse({ description: 'Room fetched.', type: Room, status: 200 })
  async getRoomBySlug(
    @Param('slug')
    slug: string,
  ) {
    return this.roomService.findRoomBySlug(slug);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Room created.', type: Room })
  async createRoom(
    @Body()
    room: CreateRoomDto,
  ): Promise<Room> {
    return this.roomService.createRoom(room);
  }

  @Put(':id')
  @ApiResponse({ description: 'Room Updated.', type: Room, status: 200 })
  async updateRoom(
    @Param('id')
    id: string,
    @Body()
    room: UpdateRoomDto,
  ) {
    return this.roomService.updateRoom(room, id);
  }
}
