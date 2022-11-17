import Parser from "html-react-parser";

function SearchItem({ item }) {
  const { link, formattedUrl, title, htmlSnippet } = item;
  return (
    <div className="max-w-xl mb-8">
      <div className="group">
        <a className='text-sm truncate' href={link} target="_blank">{formattedUrl}</a>
        <a className='group-hover:underline decoration-color-blue-800' href={link} target="_blank">
          <h2 className="truncate text-xl font-medium text-blue-800">{title}</h2>
        </a>
      </div>
      <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </div>
  );
}

export default SearchItem;
