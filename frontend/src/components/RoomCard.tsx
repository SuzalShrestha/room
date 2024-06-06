'use client';

import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {Bed, Bath, Wifi, MapPin, DollarSign, Home, User, Tv2, Coffee, Thermometer} from 'lucide-react';

interface RoomCardProps {
    room: {
        owner: string;
        roomStatus: string;
        status: string;
        title: string;
        description: string;
        images: string[];
        number: number;
        province: string;
        city: string;
        address: string;
        price: number;
        beds: number;
        bathrooms: number;
        features: string[];
    };
}

const RoomCard: React.FC<RoomCardProps> = ({room}) => {
    const {
        title,
        description,
        owner,
        roomStatus,
        status,
        number,
        province,
        city,
        address,
        price,
        beds,
        bathrooms,
        features,
    } = room;

    return (
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-xl font-semibold">
                    Hosted by {owner}
                </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-500 mb-4">
                    {description}
                </div>
            </div>


            <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold mb-4">Where you&apos;ll sleep</h2>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg mb-4">
                    <Bed className="text-gray-600 mr-4" size={24}/>
                    <div>
                        <div className="text-lg font-medium">Bedroom</div>
                        <div className="text-gray-500">{beds} double bed(s)</div>
                    </div>
                </div>

                <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 gap-4">
                    {features.includes('Wifi') && (
                        <div className="flex items-center">
                            <Wifi className="text-gray-600 mr-2" size={20}/>
                            <span>Wifi</span>
                        </div>
                    )}
                    {features.includes('TV') && (
                        <div className="flex items-center">
                            <Tv2 className="text-gray-600 mr-2" size={20}/>
                            <span>TV</span>
                        </div>
                    )}
                    {features.includes('Air Conditioning') && (
                        <div className="flex items-center">
                            <Thermometer className="text-gray-600 mr-2" size={20}/>
                            <span>Air Conditioning</span>
                        </div>
                    )}
                    {features.includes('Breakfast') && (
                        <div className="flex items-center">
                            <Coffee className="text-gray-600 mr-2" size={20}/>
                            <span>Breakfast</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
