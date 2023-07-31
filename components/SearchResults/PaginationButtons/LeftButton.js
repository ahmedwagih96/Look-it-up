import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
function LeftButton() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <Link
      href={`/search?term=${router.query.term}&searchType=${
        router.query.searchType
      }&start=${startIndex - 10}`}
    >
      <div className="cursor-pointer flex flex-col items-center hover:underline ">
        <ChevronLeftIcon className="h-5" />
        <p>Previous</p>
      </div>
    </Link>
  );
}

export default LeftButton;
