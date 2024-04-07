"use client";

import { usePlaylists, usePlaylistsDispatch, useVideos } from "@/app/Context";
import VideoItem from "@/components/video-item";

export default function page({ params }: { params: { id: String } }) {
  const playlists = usePlaylists();
  const dispatch = usePlaylistsDispatch();
  const videos = useVideos();
  const M = new Map(); // use a map to find videos in the playlist
  for (const v of videos) {
    M.set(v.id, v);
  }

  if (playlists.length === 0) {
    return <h1>Loading...</h1>;
  }

  const playlist = playlists.find((p) => String(p.id) === params.id);

  if (playlist) {
    return (
      <>
        {playlist.videoIds.map((id) => {
          const video = M.get(id);
          if (video) {
            return (
              <VideoItem
                video={video}
                key={id}
                add={false}
                onClick={() => dispatch({ kind: "removeV", id: Number(params.id), vid: id })}
              />
            );
          }
        })}
      </>
    );
  } else {
    return <h1>Playlist Not Found</h1>;
  }
}
