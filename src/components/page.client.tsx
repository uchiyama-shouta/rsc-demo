import type { VFC, ReactNode } from "react";
import Header from "./layout/header";
import Meta from "./meta";

type Props = { children: ReactNode };

const Page: VFC<Props> = ({ children }) => {
  return (
    <div className="p-0 mx-auto w-auto md:pt-[10px] md:w-[85%]">
      <Meta />
      <Header />
      <div className="py-[3px] px-[10px] text-[#828282] bg-white">
        {children}
      </div>
    </div>
  );
};

export default Page;
