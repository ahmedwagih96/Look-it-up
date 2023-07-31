import SearchImage from "./SearchImage"

function ImagesResults({items}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 mt-4 content-center gap-x-4 gap-y-8">
    {items?.map((item) => (
      <SearchImage key={item.link} item={item} />
    ))}
  </div>
  )
}

export default ImagesResults