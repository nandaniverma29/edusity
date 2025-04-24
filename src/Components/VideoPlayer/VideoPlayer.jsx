import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({ playState, setPlayState, videoSrc }) => {
  return (
    <div className={`video-player ${playState ? "" : "hide"}`}>
      <video src={videoSrc} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer
