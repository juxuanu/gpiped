import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { Regions, StreamItem } from "../../models";
import { PipedService } from "../../server";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  trendingVideos: StreamItem[];
}

export function Home(props: Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Trends in{" "}
          {router.asPath
            .slice(router.asPath.lastIndexOf("/") + 1)
            .toUpperCase()}
        </title>
      </Head>

      <main className="mx-10 w-fit h-full">
        <div className="mx-auto flex flex-row flex-wrap justify-around gap-10 w-fit h-full">
          {props.trendingVideos.map((video, index) => (
            <div
              key={video.url}
              className="w-60 h-60 border border-solid border-neutral-200 rounded-xl overflow-hidden cursor-pointer
              hover:bg-neutral-200 transition-colors duration-300 shadow-md shadow-neutral-200"
              onClick={() => router.push(`/${video.url}`)}
            >
              <img
                loading="lazy"
                tabIndex={index}
                src={video.thumbnail}
                className="w-full h-auto"
                alt={`${video.title} thumbnail`}
              />
              <h2 className="text-base p-2">
                {video.title.length > 49
                  ? video.title.slice(0, 50) + "..."
                  : video.title}
              </h2>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  console.debug(context.params);
  return {
    props: {
      trendingVideos: (
        await PipedService.getTrendingVideos(
          Regions[
            (
              context.params?.region as string
            ).toUpperCase() as keyof typeof Regions
          ]
        )
      ).data,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: Object.values(Regions).map((region) => ({
      params: {
        region: region.toString().toLowerCase(),
      },
    })),
    fallback: true,
  };
}
