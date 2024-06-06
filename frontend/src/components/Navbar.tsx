"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Search, User, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50 w-full">
      <NavigationMenu className="p-4 w-full">
        <div className="text-lg lg:text-2xl font-bold text-gray-800">
          <Link href="/">RoomDex</Link>
        </div>

        {/* <NavigationMenuList className="hidden md:flex space-x-4">
                        <NavigationMenuItem>
                            <Link href="/room" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Rooms
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Experiences</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white shadow-lg p-4 rounded-md">
                                <NavigationMenuLink href="#">Popular</NavigationMenuLink>
                                <NavigationMenuLink href="#">Virtual Experiences</NavigationMenuLink>
                                <NavigationMenuLink href="#">In-Person Experiences</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Online Experiences</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white shadow-lg p-4 rounded-md">
                                <NavigationMenuLink href="#">Cooking Classes</NavigationMenuLink>
                                <NavigationMenuLink href="#">Crafting</NavigationMenuLink>
                                <NavigationMenuLink href="#">Fitness</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList> */}

        <div className="flex justify-end items-center space-x-4 md:space-x-10">
          <button className="flex items-center space-x-2 text-gray-600">
            <Globe className="h-5 w-5" />
            <span>EN</span>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center space-x-2 border p-2 rounded-full text-gray-600">
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sigin Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login" passHref>
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup" passHref>
                  Signup
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
