import React from 'react'

const Video = ({video,index}) => {
  return (
    <>
            <div className="item flex gap-2 items-center my-3" key={index}>
                <div className="img flex-1">
                  <img className='h-[100px] w-[200px] rounded-md' src={video.imageSrc} alt="" />
                </div>
                <div className="discription flex-2">
                  <h1>{video.text}</h1>
                </div>
              </div>
    </>
  )
}

export default Video
