import React from 'react';
import MediaPlayer from './media-player.component';
import Video from './video.component';
import videoData from '../store/video-data.json';

function Media() {
  return (
    <div className='flex gap-5'>
      <MediaPlayer />

      <div className="side-content flex-2">
        <h1 className=''>Mix-Playlist with the song of favourite</h1>
        <div className="list_items px-1">
          {
            videoData.map((video, index) => (
              <Video video={video} key={index} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Media;
