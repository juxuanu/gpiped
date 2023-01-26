import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Footer, Header } from "../ui";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        className="bg-neutral-100 text-gray-900 transition-all scroll-smooth"
        lang="en"
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="description"
            content="Piped frontend inspired by Gnome design"
          />
        </Head>
        <body className="mx-auto max-w-[1920px]">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
