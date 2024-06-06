import React from 'react';
import {cn} from '@/lib/utils';
import {BentoGrid, BentoGridItem} from '@/components/ui/bento-grid';
import Image from 'next/image';
import RoomCard from '@/components/RoomCard';
import {Share2, Heart} from 'lucide-react';
import ReserveRoom from '@/components/ReserveCard';

const details = [
    {
        owner: 'Bhuwan Acharya',
        roomStatus: 'available',
        status: 'pending',
        title: 'Luxury Suite',
        description: 'A luxurious suite with a sea view',
        images: [
            'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1533167649158-6d508895b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D',
        ],
        number: 101,
        province: 'Gandaki',
        city: 'Pokhara',
        address: 'Lakeside, Pokhara',
        price: 3000,
        beds: 2,
        bathrooms: 1,
        features: [
            'WiFi',
            'Air Conditioning',
            'TV',
        ],
        slug: 'luxury-suite',
    },
];

interface RoomSlugPageProps {
    params: {
        slug: string;
    };
}

const RoomSlugPage: React.FC<RoomSlugPageProps> = ({params}) => {
    const {slug} = params;

    const room = details.find(detail => detail.slug === slug);

    if (!room) {
        return <div>Room not found</div>;
    }

    return (
        <div className="px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-800 capitalize">{room.title}</h1>
                <p className="text-xl text-blue-500 mb-8">{room.province}, {room.city}</p>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                            <Share2 size={20}/>
                            <span>Share</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                            <Heart size={20}/>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
                <BentoGrid className="max-w-6xl mx-auto mb-8 gap-4">
                    {room.images.map((image, i) => (
                        <BentoGridItem
                            key={i}
                            image={
                                <Image
                                    height={200}
                                    width={300}
                                    src={image}
                                    alt={`Room Image ${i + 1}`}
                                    className={cn(
                                        'object-cover w-full h-52 rounded-xl',
                                        i === 3 || i === 6 ? 'md:row-span-2' : '',
                                    )}
                                />
                            }
                            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
                        />
                    ))}
                </BentoGrid>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <RoomCard room={room}/>
                    </div>
                    <div className="lg:w-1/3">
                        <ReserveRoom currency="₹" price={room.price}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSlugPage;
