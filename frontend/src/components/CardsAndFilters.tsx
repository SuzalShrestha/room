"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  AirVentIcon,
  Building2Icon,
  ParkingCircleIcon,
  UtensilsCrossed,
  WifiIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { Room } from "@/types/Room";

export const features = [
  {
    title: "WiFi",
    icon: WifiIcon,
  },
  {
    title: "AC",
    icon: AirVentIcon,
  },
  {
    title: "Balcony",
    icon: Building2Icon,
  },
  {
    title: "Parking",
    icon: ParkingCircleIcon,
  },
  {
    title: "Kitchen",
    icon: UtensilsCrossed,
  },
  {
    title: "WiFi",
    icon: WifiIcon,
  },
  {
    title: "AC",
    icon: AirVentIcon,
  },
  {
    title: "Balcony",
    icon: Building2Icon,
  },
  {
    title: "Parking",
    icon: ParkingCircleIcon,
  },
  {
    title: "Kitchen",
    icon: UtensilsCrossed,
  },
];

const CardsAndFilters = ({ rooms }: {rooms: Room[]}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center md:flex-row md:justify-between md:items-center px-4 gap-4 overflow-hidden">
        <div className="flex flex-row justify-between items-center w-full md:w-[85%] overflow-hidden">
          <Carousel className="">
            <CarouselContent>
              {features?.map((feature, index) => (
                <CarouselItem key={index} className="w-2">
                  <div className="p-1">
                    <Card className="flex flex-row items-center justify-center">
                      <CardContent className="flex flex-col items-center justify-center p-2">
                        <span className="font-semibold">{feature.title}</span>
                        {<feature.icon className="h-5 w-5" />}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full md:w-[15%] flex items-start justify-center md:justify-end">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="low_to_high">Price Low to High</SelectItem>
                <SelectItem value="high_to_low">Price High to Low</SelectItem>
                <SelectItem value="top_rated">Top Rated</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
        {rooms &&
          rooms?.map((room, index) => (
            <Card
              key={index + 1}
              className="rounded-none shadow-none border-none"
            >
              <CardContent className="mt-4">
                <Link
                  className="flex flex-col items-start justify-center gap-2 flex-nowrap"
                  href={"/room/slug"}
                >
                  <Image
                    alt="room cover"
                    src={"/sample-room.jpg"}
                    width={300}
                    height={400}
                    className="object-cover object-center w-full h-full rounded-lg"
                  />
                  <div>
                    <h2 className="text-base font-bold text-slate-900 capitalize">
                      {room.title}
                    </h2>
                    <p className="text-slate-700">{room.province}, {room.city}</p>
                    <p>
                      Rs.{" "}
                      <span className="font-semibold text-slate-700">{room.price}</span>{" "}
                      per month
                    </p>
                    <p className="text-slate-700">
                      Hosted by{" "}
                      <span className="font-bold">{room.owner}</span>
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default CardsAndFilters;
