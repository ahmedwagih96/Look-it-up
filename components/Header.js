import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import User from "./User";

function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-4 text-sm text-gray-700">
      <div className="flex gap-2 items-center">

        <Image
          alt="look it up logo"
          src="/logo.png"
          width="70"
          height="30"
          className="object-contain cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex gap-2 items-center">
        <User />
      </div>
    </header>
  );
}

export default Header;
