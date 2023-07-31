import Parser from "html-react-parser";

function SearchItem({ item }) {
  const { link, formattedUrl, title, htmlSnippet } = item;
  return (
    <div className="mb-8 md:max-w-[70%]">
      <div className="group max-w-[100%]">
        <a
          className="block truncate text-sm"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {formattedUrl}
        </a>
        <a
          className="group-hover:underline decoration-color-blue-800"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="truncate text-xl font-medium text-blue-800">
            {title}
          </h2>
        </a>
      </div>
      <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </div>
  );
}

export default SearchItem;
