import React from 'react';
import MediaPlayer from './media-player.component';
import Video from './video.component';
import videoData from '../store/video-data.json';

function Media() {
  return (
    <div className='lg:flex gap-5 mt-3'>
      <MediaPlayer />

      <div className="side-content lg:flex-2 lg:mt-0 mt-3">
        <h1 className='font-medium py-4 bg-zinc-700 px-2 rounded-t-md'>Mix-Playlist with the song of favourite</h1>
        <div className="list_items p-1 lg:p-2 bg-black h-100 overflow-y-scroll rounded-b-md ">
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
