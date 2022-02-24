import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <span className="inline-block mt-1 mr-[5px] mb-[2px] ml-1 ">
          <span className="inline-block py-[5px] px-2 text-[11px] font-bold text-white border-[1px] border-white">
            N
          </span>
        </span>
        <span className="inline-block pt-2 pr-[10px] pb-0 pl-1 text-base font-bold align-top md:pb-2 md:text-sm">
          Hacker Next
        </span>
      </a>
    </Link>
  );
}
