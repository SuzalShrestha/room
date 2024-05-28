import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';

@ApiTags("User")
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiCreatedResponse({ description: 'User created.', type: User })
  @Post('register')
  async registerUser(@Body() user: CreateUserDto): Promise<any> {
    return this.userService.registerUser(user);
  }
}
