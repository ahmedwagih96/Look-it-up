import SearchItem from "./SearchItem";

function TopicsResults({ items }) {
  return (
    <>
      {items?.map((item) => (
        <SearchItem key={item.link} item={item} />
      ))}
    </>
  );
}

export default TopicsResults;
