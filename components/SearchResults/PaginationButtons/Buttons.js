import { useRouter } from "next/router";
function Buttons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  const pagesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const pageNumberPagination = (number) => {
    if (number === 1) {
      router.push(
        `/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${number}`
      );
    } else {
      router.push(
        `/search?term=${router.query.term}&searchType=${
          router.query.searchType
        }&start=${(number - 1) * 10 + 1}`
      );
    }
  };
  
  return (
    <div className="flex gap-2 flex-grow justify-center">
      {pagesNumber.map((number) => (
        <p
          key={number}
          className={`hover:underline cursor-pointer ${
            number === Math.ceil(startIndex / 10) && "text-black"
          }`}
          onClick={() => {
            pageNumberPagination(number);
          }}
        >
          {number}
        </p>
      ))}
    </div>
  );
}

export default Buttons;
