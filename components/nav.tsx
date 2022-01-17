import type { ReactNode, VFC } from "react";

const Nav: VFC = () => {
  return (
    <ul className="nav-ul">
      <Item href="/newest">new</Item>
      <Item href="/show">show</Item>
      <Item href="/ask">ask</Item>
      <Item href="/jobs">jobs</Item>
      <Item href="/submit">submit</Item>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .nav-ul {
        list-style-type: none;
      }
      .nav-ul li {
        display: inline-block;
      }
      .nav-ul li a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }
      .nav-ul li a:hover {
        color: #fff;
      }
    `,
        }}
      />
    </ul>
  );
};

type Props = {
  href: string;
  children: ReactNode;
};

const Item: VFC<Props> = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
);

export default Nav;
