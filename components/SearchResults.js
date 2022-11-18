import PaginationButtons from "./PaginationButtons";
import SearchItem from "./SearchItem";

function SearchResults({ results }) {
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
    items,
  } = results;

  const renderResults = () => {
    return items.map((item) => <SearchItem key={item.link} item={item} />);
  };
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedTotalResults} results {formattedSearchTime} seconds
      </p>
      {renderResults()}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
