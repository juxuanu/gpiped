import { VideoInfo } from "../models";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PipedService } from "../server";

export default async function VideoPage() {
  const router = useRouter();
  const [videoInfo, setVideoInfo] = useState({} as VideoInfo);

  useEffect(() => {
    const fetchData = async () => {
      const videoInfo = await PipedService.getVideoInfo(
        router.pathname[router.pathname.lastIndexOf("?v=") + 1]
      );
      return videoInfo;
    };
    fetchData()
      .then((vi) => setVideoInfo(vi))
      .catch((r) => console.error(r));
  }, [router.asPath]);

  return (
    <main className="mx-10">
      <video autoPlay={false} className="w-[80%] h-auto m-auto">
        {videoInfo ? (
          videoInfo.videoStreams!.map((stream) => (
            <source src={stream.url} type={stream.mimeType} />
          ))
        ) : (
          <p className="w-fit h-fit m-auto text-3xl">Loading...</p>
        )}
      </video>
    </main>
  );
}
