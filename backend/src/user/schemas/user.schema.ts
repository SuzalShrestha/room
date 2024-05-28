import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcryptjs';
import { Document } from 'mongoose';

export enum UserStatus {
    PENDING = "pending",
    APPROVED = "approved",
    BLOCKED = "blocked"
}

export enum UserRole {
    USER = "user",
    OWNER = "owner",
}

@Schema({ timestamps: true })
export class User {
    @ApiProperty({ description: "First Name of the user.", example: "John" })
    @Prop({ required: true })
    firstName: string;

    @ApiProperty({ description: "Last Name of the user.", example: "Doe" })
    @Prop({ required: true })
    lastName: string;

    @ApiProperty({ description: "Email of the user.", example: "john.doe@gmail.com" })
    @Prop({ required: true, unique: true })
    email: string;

    @ApiProperty({ description: "Password of the user.", example: "********" })
    @Prop({ required: true })
    password: string;

    @ApiProperty({ description: "Account status of the user.", example: UserStatus.PENDING })
    @Prop({ default: UserStatus.PENDING, enum: UserStatus })
    status: UserStatus;

    @ApiProperty({ description: "Phone number of the user.", example: "9898989898" })
    @Prop()
    phone: string;

    @ApiProperty({ description: "Address of the user.", example: "Kathmandu Nepal" })
    @Prop()
    address: string;

    @ApiProperty({ description: "Profile picture of the user.", example: "https://example.com/profile.jpg" })
    @Prop()
    profile: string;

    @ApiProperty({ description: "Role of the user.", example: UserRole.USER })
    @Prop({ default: UserRole.USER, enum: UserRole })
    role: UserRole;
}

export type UserDocument = User & Document & {
    matchPassword: (enteredPassword: string) => Promise<boolean>;
};

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

export { UserSchema };
