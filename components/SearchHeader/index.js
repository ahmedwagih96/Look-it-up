import Image from "next/image";
import { useRouter } from "next/router";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "../User";
import Form from "./Form";

function SearchHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-2 md:p-6 items-center gap-2 md:gap-6">
        <Image
          src="/logo.png"
          width="80"
          height="30"
          className="object-contain cursor-pointer"
          alt="look it up logo"
          onClick={() => router.push("/")}
        />
        <Form />
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
