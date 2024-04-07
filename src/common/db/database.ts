import { Playlist } from '@/interfaces/playlist';
import { Video } from '@/interfaces/video';

export const Database = {
  playlists: (): Playlist[] => {
    return require('./playlists.json');
  },
  videos: (): Video[] => {
    return require('./videos.json');
  }
}