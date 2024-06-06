import { Search } from "lucide-react";
import React from "react";
import { Label } from "@/components/ui/label";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full py-20">
      <Label htmlFor="search_bar" className="">Type <span className="font-semibold">location</span>, <span className="font-semibold">features</span>, <span className="font-semibold">owner</span>, etc.</Label>
      <div className="relative text-gray-600 md:mx-4 flex flex-row items-center px-4 justify-center gap-2 w-full md:w-1/2 lg:w-2/5">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-gray-200 h-12 px-5 pr-10 rounded-full text-sm w-full focus:outline-none"
        />
        <button type="submit" className="bg-black text-white p-2 rounded-full">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
