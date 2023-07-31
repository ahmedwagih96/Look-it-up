import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import useSearch from "../../hooks/useSearch";
function Form() {
  const router = useRouter();
  const [input, setInput] = useState(router.query.term);
  const { search } = useSearch();
  const inputRef = useRef(null);
  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-4 md:px-6 py-3 items-center sm:flex-grow"
      onSubmit={(e) => search(e, input)}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-none outline-none w-[100px] sm:flex-grow"
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
  );
}

export default Form;
