"use client";
import React from "react";
import { usePlaylists } from "../Context";
import { PlaylistItem } from "@/components/playlist-item";
import { useRouter } from "next/navigation";

export default function PlaylistsPage() {
  const playlists = usePlaylists();
  const router = useRouter();

  return (
    <>
      {playlists.map((p) => (
        <PlaylistItem
          playlist={p}
          key={p.id}
          onClick={() => {
            router.push(`playlists/${p.id}`);
          }}
        />
      ))}
    </>
  );
}
