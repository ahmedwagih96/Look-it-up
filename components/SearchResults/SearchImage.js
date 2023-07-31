import Link from "next/link";
import React from "react";

function SearchImage({ item }) {
  return (
    <div className="group">
      <Link href={item.image.contextLink} target="_blank">
        <img
          src={item.link}
          alt={item.title}
          className="group-hover:shadow-xl w-full h-60 object-contain"
        />
      </Link>
      <Link className='group-hover:underline' href={item.image.contextLink} target="_blank">
        <h2 className="truncate text-xl">{item.title}</h2>
      </Link>
      <Link className='group-hover:underline' href={item.image.contextLink} target="_blank">
        <p className="text-gray-600">{item.displayLink}</p>
      </Link>
    </div>
  );
}

export default SearchImage;
