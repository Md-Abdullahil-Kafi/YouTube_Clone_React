

const MediaPlayer = () => {
  return (
    <>
      <div className="player flex-5 ">
        <iframe className='w-full aspect-video rounded-lg' src="https://www.youtube.com/embed/W8We0tKTmQ0?si=ruV5rNa5VhN-ZPCp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
    </>
  )
}

export default MediaPlayer
