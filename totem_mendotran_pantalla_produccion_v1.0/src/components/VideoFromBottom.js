import React from 'react';
import './VideoFromBottom.css';
import publiVideo from '../videos/video.mp4'

class VideoFromBottom extends React.Component {
  render() {
    return (
      <>
        <div>
          {/* <video className="publicidad_emergente" loop muted autoplay="autoplay"> */}
          <video className="publicidad_emergente" muted autoplay="autoplay">
            <source src={publiVideo} type="video/mp4"/>
          </video>
        </div>
      </>
    );
  }
}

export default VideoFromBottom;