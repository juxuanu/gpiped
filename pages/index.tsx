import { Regions } from "../models";
import { useRouter } from "next/router";

export default function HomePage() {
  return (
    <div className="w-fit h-fit m-auto">
      <h2 className="mx-auto w-fit h-fit">Trends</h2>
      <ul className="grid grid-cols-10 max-w-[400px]">
        {Object.values(Regions).map((region) => (
          <li
            onClick={() =>
              (window.location.href = `/trends/${region.toLowerCase()}`)
            }
            className="list-none text-center cursor-pointer p-1 rounded-md bg-neutral-100 hover:bg-neutral-200"
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
