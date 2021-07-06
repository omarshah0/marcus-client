import React from "react"
import YouTube from "react-youtube"

import "./style.css"

const YoutubePlayer = ({ providerUid }) => {
  return (
    <YouTube
      videoId={providerUid} // defaults -> null // defaults -> null
      className="youtube" // defaults -> null
      containerClassName="youtube-container" // defaults -> ''
    />
  )
}

export default YoutubePlayer
