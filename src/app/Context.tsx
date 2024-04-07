"use client";

import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import { Playlist } from "@/interfaces/playlist";
import { GET as GETP } from "./api/playlists/route";
import { Video } from "@/interfaces/video";
import { GET as GETV } from "./api/videos/route";

const PlaylistsContext = createContext<Playlist[]>([]);

const PlaylistsDispatchContext = createContext<(action: PlaylistAction) => void>(() => {});

export function PlaylistsProvider({ children }: { children: ReactNode }) {
  const [playlists, dispatch] = useReducer(playlistsReducer, []);
  async function fetchPlaylists() {
    var data: Playlist[] = [];
    const localPlaylists = localStorage.getItem("playlists");
    if (localPlaylists !== null) {
      data = JSON.parse(localPlaylists);
    } else {
      const resp = await GETP();
      data = await resp.json();
    }
    dispatch({ kind: "setP", playlists: data });
  }
  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <PlaylistsContext.Provider value={playlists}>
      <PlaylistsDispatchContext.Provider value={dispatch}>
        {children}
      </PlaylistsDispatchContext.Provider>
    </PlaylistsContext.Provider>
  );
}

export function usePlaylists() {
  return useContext(PlaylistsContext);
}
export function usePlaylistsDispatch() {
  return useContext(PlaylistsDispatchContext);
}

interface addP {
  kind: "Addp";
  name: string;
  description: string;
}

interface removeP {
  kind: "removeP";
  id: number;
}

interface addV {
  kind: "addV";
  id: number;
  vid: number;
}

interface removeV {
  kind: "removeV";
  id: number;
  vid: number;
}

interface setP {
  kind: "setP";
  playlists: Playlist[];
}

type PlaylistAction = addP | removeP | addV | removeV | setP;

function playlistsReducer(playlists: Playlist[], action: PlaylistAction): Playlist[] {
  var nextState: Playlist[] = [];
  switch (action.kind) {
    case "setP": {
      nextState = [...action.playlists];
      break;
    }
    case "Addp": {
      nextState = [
        ...playlists,
        {
          name: action.name,
          description: action.description,
          // use a unique id instead
          id: Math.floor(Math.random() * 100000000),
          videoIds: [],
        },
      ];
      break;
    }
    case "removeP": {
      nextState = playlists.filter((p) => p.id !== action.id);
      break;
    }
    case "addV": {
      nextState = playlists.map((p) => {
        if (p.id === action.id) {
          if (!p.videoIds.includes(action.vid)) {
            return { ...p, videoIds: [...p.videoIds, action.vid] };
          } else {
            // shows up twice because of strict mode
            alert("Playlist already contains the video");
            return p;
          }
        } else {
          return p;
        }
      });
      break;
    }
    case "removeV": {
      nextState = playlists.map((p) => {
        if (p.id === action.id) {
          return {
            ...p,
            videoIds: p.videoIds.filter((v) => v !== action.vid),
          };
        } else {
          return p;
        }
      });
      break;
    }
  }
  localStorage.setItem("playlists", JSON.stringify(nextState));
  return nextState;
}

export function useVideos(): Video[] {
  const [videos, setVideos] = useState([]);

  async function fetchData() {
    const resp = await GETV();
    const data = await resp.json();
    setVideos(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return videos;
}
