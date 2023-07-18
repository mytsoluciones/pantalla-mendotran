import React from 'react';
// import ReactPlayer from 'react-player';
import './VideoFromBottom.css';
import publiGrande from '../images/publicidad/grande/publi_grande.jpg'
import publiVideo from '../videos/video.mp4'

class VideoFromBottom extends React.Component {
  render() {
    return (
      <>
        <div>
          <video className="publicidad_emergente" loop muted autoplay="autoplay">
            <source src={publiVideo} type="video/mp4"/>
          </video>
        </div>
      </>
    );
  }
}

export default VideoFromBottom;