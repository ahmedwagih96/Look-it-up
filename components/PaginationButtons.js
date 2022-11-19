import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  const pagesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageNumberPagination = (number) => {
    if (number === 1) {
      router.push(
        `/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${number}`
      );
    } else {
      router.push(
        `/search?term=${router.query.term}&searchType=${
          router.query.searchType
        }&start=${(number - 1) * 10 + 1}`
      );
    }
  };
  const renderButtons = () => {
    return (
      <div className="flex gap-2 flex-grow justify-center">
        {pagesNumber.map((number) => (
          <p
            key={number}
            className="hover:underline cursor-pointer"
            onClick={() => {
              pageNumberPagination(number);
            }}
          >
            {number}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="text-blue-700 pb-4 max-w-xl flex justify-between items-center">
      {startIndex > 10 && (
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
      )}
      {renderButtons()}
      {startIndex < 90 && (
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
      )}
    </div>
  );
}

export default PaginationButtons;
