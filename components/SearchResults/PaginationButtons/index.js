import Buttons from "./Buttons";
import NextButton from "./NextButton";
import LeftButton from "./LeftButton";
import { useRouter } from "next/router";
function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="text-blue-700 pb-4 max-w-xl flex justify-between items-center">
      {startIndex > 10 && <LeftButton />}
      <Buttons />
      {startIndex < 90 && <NextButton />}
    </div>
  );
}

export default PaginationButtons;
