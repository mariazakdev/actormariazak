import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../../Styles/Galleries.scss';

export default function DemoReels() {
  const [featuredVideo, setFeaturedVideo] = useState('https://www.youtube.com/watch?v=xyz123'); // Replace with your featured video URL
  const videoReels = [
    'https://youtu.be/Dc_IJBO7Ep0', // Dance Reel
    'https://youtu.be/oLVKMztbqMo', //Mime Reel
    'https://youtu.be/vkGvVq3grlo', // Troupe Reel
    `https://youtu.be/0OJWh1qYqsY`,//Theatre Reel
    `https://youtu.be/sg9xaqvj_RM`, // Aerial Reel
    `https://youtu.be/7WdYvAKuxOk`, // Unicycle Sample

    // Add more video URLs here
  ];

  return (
    <div>
 
      <h2>Video Reels</h2>
      <div className="video-reels">
        {videoReels.map((video, index) => (
          <div key={index} className="video-reel" onClick={() => setFeaturedVideo(video)}>
            <ReactPlayer url={video} controls width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
}
