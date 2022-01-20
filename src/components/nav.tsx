import type { ReactNode, VFC } from "react";

const Nav: VFC = () => {
  return (
    <ul>
      <Item href="/newest">new</Item>
      <Item href="/show">show</Item>
      <Item href="/ask">ask</Item>
      <Item href="/jobs">jobs</Item>
      <Item href="/submit">submit</Item>
    </ul>
  );
};

type Props = {
  href: string;
  children: ReactNode;
};

const Item: VFC<Props> = ({ href, children }) => (
  <li className="inline-block">
    <a
      className="inline-block p-[10px] text-[11px] text-black hover:text-white uppercase"
      href={href}
    >
      {children}
    </a>
  </li>
);

export default Nav;
