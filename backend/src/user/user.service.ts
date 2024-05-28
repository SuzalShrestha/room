import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: UserDocument;
  }
}

export type UserWithoutPassword = Omit<User, 'password'>;

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async alreadyExists(email: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email });
    return !!user;
  }

  async registerUser(userDto: CreateUserDto): Promise<UserWithoutPassword> {
    if (await this.alreadyExists(userDto.email)) {
      throw new BadRequestException('Account already exists');
    }
    const user = await this.userModel.create(userDto);
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  }

  async updateUser(
    userDto: UpdateUserDto,
    @Req() req: Request,
  ): Promise<UserWithoutPassword> {
    const userId = req.user?._id; // Accessing user id from request user object
    if (!userId) {
      throw new BadRequestException('User not found');
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      userDto,
      { new: true },
    );
    if (!updatedUser) {
      throw new BadRequestException('Failed to update user');
    }

    const { password, ...userWithoutPassword } = updatedUser.toObject();
    return userWithoutPassword;
  }
}
