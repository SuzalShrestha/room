import { RoomStatus } from "../schemas/room.schema";

export class CreateRoomDto {
    readonly owner: string;
    readonly roomStatus: RoomStatus;
    readonly title: string;
    readonly description: string;
    readonly images: string[];
    readonly number: number;
    readonly province: string;
    readonly city: string;
    readonly address: string;
    readonly price: number;
    readonly beds: number;
    readonly bathrooms: number;
    readonly features: string[];
    readonly slug: string;
}