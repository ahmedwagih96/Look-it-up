// Custom Hook
import useSearch from "../../hooks/useSearch";

function Buttons() {
  const { randomSearch } = useSearch();
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-5">
      {/* User Search */}
      <button type="submit" className="search-btn">
        Google Search
      </button>
      {/* Random Search */}
      <button className="search-btn" onClick={(e) => randomSearch(e)}>
        I&apos;m Feeling Lucky
      </button>
    </div>
  );
}

export default Buttons;
