import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex gap-8 select-none justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}

export default SearchHeaderOptions;
