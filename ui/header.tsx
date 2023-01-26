import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full h-fit mt-4 mb-6">
      <h1 className="mx-auto w-fit h-fit text-2xl">
        <Link href={"/"} className="w-fit h-fit">
          GPiped
        </Link>
      </h1>
    </header>
  );
}
