/* eslint @next/next/no-sync-scripts: 0 */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV === "development" && (
          <>
            <script src="https://cdn.tailwindcss.com" />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
