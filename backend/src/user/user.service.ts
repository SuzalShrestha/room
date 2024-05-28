import { BadRequestException, Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async alreadyExists(email: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email });
    return !!user;
  }

  async registerUser(userDto: CreateUserDto): Promise<string> {
    if (await this.alreadyExists(userDto.email)) {
      throw new BadRequestException('Account already exists');
    }
    const user = await this.userModel.create(userDto);
    const token = this.jwtService.sign({ id: user._id });
    return token;
  }
}
