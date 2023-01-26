import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Cantarell } from "@next/font/google";

const cantarell = Cantarell({ weight: ["400", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${cantarell.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
