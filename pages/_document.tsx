import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Footer, Header } from "../ui";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="description"
            content="Piped frontend inspired by Gnome design"
          />
        </Head>
        <body className="mx-auto max-w-[1920px] bg-neutral-100 text-gray-900 transition-all scroll-smooth">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
