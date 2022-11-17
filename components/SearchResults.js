
function searchResults({ results }) {
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
  } = results;
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedTotalResults} results {formattedSearchTime} seconds
      </p>
    </div>
  );
}

export default searchResults;
