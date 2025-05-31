import React, { useState, useEffect } from 'react'

const videoData = [
    {
        video: "../src/assets/videos/video1.mp4",
        title: "All Your Information in One Place",
        subtitle: 'Simplify Management with a Unified Data Platform.'
    },
    {
        video: "../src/assets/videos/video2.mp4",
        title: "Access Anytime, Anywhere",
        subtitle: 'Empowering You with Data on Demand Across Devices.'
    },
    {
        video: '../src/assets/videos/video3.mp4',
        title: "Lower Costs, Higher Value",
        subtitle: 'Offering Premium Features at a Fraction of the Price.'
    },
]

const VideoContent = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoData.length);
    }, 7000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      {/* Videos */}
      {videoData.map((item, index) => (
        <video
          key={currentVideo}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo ? 'opacity-100' : 'opacity-0 z-0'
          }`}
          src={videoData[currentVideo].video}
          autoPlay
          loop
          muted
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4  bg-opacity-0 transition-opacity duration-1000 z-10">
        <h1 className="text-6xl md:text-6xl font-bold mb-4">
          {videoData[currentVideo].title}
        </h1>
        <p className="text-base md:text-lg font-normal">
          {videoData[currentVideo].subtitle}
        </p>
      </div>
    </div>
  );
}

export default VideoContent;
