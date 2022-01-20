import Nav from "../nav";
import Logo from "../logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex text-sm bg-[#ffa52a]">
      <div className="grow-[9]">
        <Link href="/">
          <a>
            <span className="inline-block mt-1 mr-[5px] mb-[2px] ml-1 ">
              <Logo />
            </span>
            <span className="inline-block pt-2 pr-[10px] pb-0 pl-1 text-base font-bold align-top md:pb-2 md:text-sm">
              Hacker Next
            </span>
          </a>
        </Link>
        <div className="block uppercase align-top md:inline-block">
          <Nav />
        </div>
      </div>
      <div className="grow text-right">
        <a
          href="/login"
          className="inline-block px-[10px] pt-[24px] pb-[23px] text-[11px] hover:text-white md:p-[10px]"
        >
          login
        </a>
      </div>
    </header>
  );
}
