import React from 'react';
import {cn} from "@/lib/utils";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import Image from "next/image";

const items = [
    {
        title: "Living Room",
        image: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Bedroom",
        image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        title: "Kitchen",
        image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        title: "Bathroom",
        image: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8MHwwfHx8MA%3D%3D",
    },


]

interface RoomSlugPageProps {
    params: {
        slug: string;
    };
}

const RoomSlugPage: React.FC<RoomSlugPageProps> = ({params}) => {
    const {slug} = params;
    return (
        <>
            <div className="px-4 py-8">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 capitalize">{slug}</h1>
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            image={
                                <Image
                                    height={200}
                                    width={300}
                                    src={item.image}
                                    alt={item.title}
                                    className={cn(
                                        "object-cover w-full h-52 rounded-xl",
                                        i === 3 || i === 6 ? "md:row-span-2" : ""
                                    )}
                                />
                            }
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>

        </>

    );
}

export default RoomSlugPage;


