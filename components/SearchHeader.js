import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

function SearchHeader() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [input, setInput] = useState(router.query.term);
  const submitSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search?term=${input.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          className="object-contain cursor-pointer"
          alt="google logo"
          onClick={() => router.push("/")}
        />
        <form
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
          onSubmit={submitSearch}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-none outline-none flex-grow"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer md:mr-3"
            onClick={() => {
              setInput("");
              inputRef.current.focus();
            }}
          />
          <MicrophoneIcon className="h-6 hidden md:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden md:inline-flex text-blue-500 " />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
