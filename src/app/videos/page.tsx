"use client";

import VideoItem from "@/components/video-item";
import { useVideos } from "../Context";

export default function VideosPage() {
  const videos = useVideos();

  return (
    <>
      {videos.map((v) => (
        <VideoItem video={v} key={v.id} />
      ))}
    </>
  );
}
