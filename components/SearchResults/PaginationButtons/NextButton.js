import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
function NextButton() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <Link
      href={`/search?term=${router.query.term}&searchType=${
        router.query.searchType
      }&start=${startIndex + 10}`}
    >
      <div className="cursor-pointer flex flex-col items-center hover:underline">
        <ChevronRightIcon className="h-5" />
        <p>Next</p>
      </div>
    </Link>
  );
}

export default NextButton;
