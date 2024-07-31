"use client"
import React, { useState } from 'react'
import NextVideo from 'next-video'
import video2 from "../../videos/video5.mp4"
import Loader from './Loader'

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loader />;

  return (
    <div className='w-full h-screen relative'>
      <NextVideo
        src={video2}
        loop
        muted
        autoPlay
        controls={false}
        className='w-full h-full object-cover'
      />
    </div>
  );
}
export default Hero;