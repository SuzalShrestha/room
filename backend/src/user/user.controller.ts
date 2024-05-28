import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Request } from 'express';

@ApiTags("User")
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async viewProfile(@Req() req: Request){
    return req.user;
  }

  @ApiCreatedResponse({ description: 'User created.'})
  @Post('')
  async registerUser(@Body() user: CreateUserDto): Promise<any> {
    return this.userService.registerUser(user);
  }

  @ApiCreatedResponse({ description: 'User updated.'})
  @Put('')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Body() user: UpdateUserDto, @Req() req: Request): Promise<any> {
    return this.userService.updateUser(user, req);
  }
}
