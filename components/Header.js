import Link from "next/link";
import User from "./User";

function Header() {
  return (
    <header className="flex justify-between p-4 text-sm text-gray-700">
      <div className="flex gap-2 items-center">
        <Link href="#" className="link">About</Link>
        <Link href="#" className="link">Home</Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link href="#" className="link">Gmail</Link>
        <Link href="#" className="link">Images</Link>
        <User />
      </div>
    </header>
  );
}

export default Header;
