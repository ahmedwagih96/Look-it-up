import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";

function Body() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?term=${searchQuery.trim()}&searchType=`);
  };
  const randomSearch = async (e) => {
    e.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((resp) => resp.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  };

  return (
    <form className="flex flex-col items-center mt-40" onSubmit={search}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        width="300"
        height="100"
        className="object-contain"
        alt="google logo"
      />
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
      <div className="flex flex-col sm:flex-row gap-2 mt-5">
        <button type="submit" className="search-btn">
          Google Search
        </button>
        <button className="search-btn" onClick={randomSearch}>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}

export default Body;
