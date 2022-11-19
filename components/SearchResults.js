import { useRouter } from "next/router";
import PaginationButtons from "./PaginationButtons";
import SearchImage from "./SearchImage";
import SearchItem from "./SearchItem";

function SearchResults({ results }) {
  const router = useRouter();
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
    items,
  } = results;

  const renderSearchResults = () => {
    return items?.map((item) => <SearchItem key={item.link} item={item} />);
  };
  const renderSearchImages = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 mt-4 content-center gap-x-4 gap-y-8">
        {items?.map((item) => (
          <SearchImage key={item.link} item={item} />
        ))}
      </div>
    );
  };
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedTotalResults} results {formattedSearchTime} seconds
      </p>
      {router.query.searchType === "image"
        ? renderSearchImages()
        : renderSearchResults()}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
