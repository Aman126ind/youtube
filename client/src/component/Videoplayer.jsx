import React, { useState } from 'react'
import ReactPlayer from 'react-player';
// import Video from "../Video/vid.mp4"
const Videoplayer = ()=>{
    const [quality,setQuality]=useState('720p');
    const [url,setUrl]=useState({
       '320p':'./Video/vid.mp4', 
       '480p':'./Video/vid.mp4',
       '720p':'./Video/vid.mp4',
       '1080p':'./Video/vid.mp4',
    });
    const handleQualityChange=(e)=>{
        setQuality(e.target.value);
    };
  return (
    <div>
      <ReactPlayer
     url={url[quality]}
     controls={true}
     width='100%'
     height='500px'
     />
     <select value={quality} onChange={handleQualityChange} >
<option value='320p'>320p</option>
<option value='420p'>420p</option>
<option value='720p'>720p</option>
<option value='1080p'>1080p</option>
     </select>
    </div>
  );
};
export default Videoplayer
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import './Videoplayer.css';

// const VideoPlayer = ({ videoSources }) => {
//   // State for current video quality and source
//   const [currentQuality, setCurrentQuality] = useState('480p');
//   const [currentSource, setCurrentSource] = useState(videoSources['480p']);

//   // Quality options
//   const qualityOptions = ['320p', '480p', '720p', '1080p'];

//   // Handle quality change
//   const handleQualityChange = (quality) => {
//     setCurrentQuality(quality);
//     setCurrentSource(videoSources[quality]);
//   };

//   return (
//     <div className="video-player-container">
//       <div className="video-player-wrapper">
//         <ReactPlayer
//           url={currentSource}
//           controls
//           width="100%"
//           height="100%"
//           playing={true}
//         />
//       </div>
      
//       <div className="quality-selector">
//         {qualityOptions.map((quality) => (
//           <button
//             key={quality}
//             className={`quality-btn ${currentQuality === quality ? 'active' : ''}`}
//             onClick={() => handleQualityChange(quality)}
//           >
//             {quality}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
// // const videoSources = {
// //     '320p': 'path/to/video_320p.mp4',
// //     '480p': 'path/to/video_480p.mp4',
// //     '720p': 'path/to/video_720p.mp4',
// //     '1080p': 'path/to/video_1080p.mp4'
// //   };
  
// //   function App() {
// //     return (
// //       <VideoPlayer videoSources={videoSources} />
// //     );
// //   }