import Nav from "../nav";
import Logo from "../logo.client";

export default function Header() {
  return (
    <header className="flex text-sm bg-[#ffa52a]">
      <div className="grow-[9]">
        <Logo />
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
