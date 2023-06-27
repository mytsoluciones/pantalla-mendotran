import React from 'react';
// import ReactPlayer from 'react-player';
import './VideoFromBottom.css';
import publiGif from '../videos/publicidad.gif'
import publiGrande from '../images/publicidad/grande/publi_grande.jpg'
import publiVideo from '../videos/publi.mp4'

class VideoFromBottom extends React.Component {
  render() {
    return (
      <>
      <div>
        <video className="publicidad_gif" loop muted autoplay="autoplay">
          <source src={publiVideo} type="video/mp4"/>
        </video>
        {/* <img className="publicidad_gif" src={publiGrande} alt="foto"></img> */}
      </div>
      </>
    );
  }
}

export default VideoFromBottom;