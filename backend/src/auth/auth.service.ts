import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}


  async validateUser(loginDto: LoginUserDto): Promise<any> {
    const { email, pass } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return null;
    }
    const isMatch = await user.matchPassword(pass);
    if (!isMatch) {
      return null;
    }
    const {password, ...result} = user.toObject();
    return {...result, access_token: this.jwtService.sign({id: user._id})};
  }
}
