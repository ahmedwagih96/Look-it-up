import { useRouter } from "next/router";
import PaginationButtons from "./PaginationButtons";
import ImageResults from "./ImagesResults";
import TopicsResults from "./TopicsResults";
function SearchResults({ results }) {
  const router = useRouter();
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
    items,
  } = results;
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>
      <div>
        {router.query.searchType === "image" ? (
          <ImageResults items={items} />
        ) : (
          <TopicsResults items={items} />
        )}
      </div>
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
