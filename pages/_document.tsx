/* eslint @next/next/no-sync-scripts: 0 */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV === "development" && (
          <>
            <script src="https://cdn.tailwindcss.com" />
            <script>{`
              tailwind.config = {
                content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
                theme: {
                  extend: {},
                  },
                plugins: [],
            }`}</script>
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
