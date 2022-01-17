import type { NextPage } from "next";
import type { VFC } from "react";

const Page: NextPage = () => {
  return (
    <div className="container">
      <h1>React Server Components in Next.js</h1>
      <SectionWithH2
        title="Without Streaming"
        text="Static + Client Side Data Fetching"
        href="/csr"
      />
      <SectionWithH2
        title="React Server Components with Streaming"
        text="RSC + HTTP Streaming"
        href="/rsc"
      />
      <br />
      <section>
        <p>
          <small>
            This demo is built with Next.js and React Server Components. Read
            about our blog post here:{" "}
            <a
              href="https://nextjs.org/blog/next-12"
              target="_blank"
              rel="noreferrer"
            >
              Next.js 12
            </a>
            .
          </small>
        </p>
        <p>
          <small>
            Check out the code:{" "}
            <a
              href="https://github.com/vercel/next-rsc-demo"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/vercel/next-rsc-demo
            </a>
          </small>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              height: 100%;
            }
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin: 0;
              padding: 20px 20px 80px;
              box-sizing: border-box;
              color: #333;
              -webkit-font-smoothing: antialiased;
              font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.4em;
              margin-top: 2em;
            }
            .container {
              font-size: 20px;
              text-align: center;
            }
            small {
              font-size: .8em;
            }
            p {
              margin: 10px;
            }
            section {
              display: block;
              margin: 5px 0;
              text-underline-position: from-font;
            }
            section a {
              color: #1386ff;
            }`,
        }}
      />
    </div>
  );
};

export default Page;

const SectionWithH2: VFC<{
  title: string;
  text: string;
  href: string;
}> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <section>
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.text}
        </a>
      </section>
    </>
  );
};
