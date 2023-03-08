import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";

function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-4 text-sm text-gray-700">
      <div className="flex gap-2 items-center">
        <a
          target="_blank"
          href="https://about.google/"
          className="link"
          rel="noreferrer"
        >
          About
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://store.google.com"
          className="link"
        >
          Home
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://mail.google.com"
          className="link"
        >
          Gmail
        </a>
        <Link
          className="link"
          href="#"
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
        >
          Images
        </Link>
        <User />
      </div>
    </header>
  );
}

export default Header;
