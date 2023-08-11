import { useState } from "react";
import Image from "next/image";
// Hero Icons 
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
// Components
import Buttons from './Buttons'
// Custom Search
import useSearch from "../../hooks/useSearch";

function Body() {
  const [searchQuery, setSearchQuery] = useState("");
  const {search} = useSearch()
  return (
    <form className="flex flex-col items-center mt-40" onSubmit={(e)=>search(e, searchQuery)}>
      {/* Body Image */}
      <Image
        src="/landing.png"
        width="300"
        height="100"
        className="object-contain"
        alt="google logo"
      />
      {/* Inputs and Buttons  */}
      <div className="flex w-[90%] mx-auto px-5 py-3 max-w-[600px] rounded-full mt-5 items-center border border-gray-200 hover:shadow-lg focus-within:shadow-lg gap-3">
        <SearchIcon className="h-5 text-gray-500" />
        <input
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          className="border-none outline-none flex-grow"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <Buttons/>
    </form>
  );
}

export default Body;