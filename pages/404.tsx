import React from "react";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="mx-auto">
        <h1 className="m-auto w-fit h-fit">
          The page you are trying to access can not be found.
        </h1>
      </div>
    </>
  );
}
