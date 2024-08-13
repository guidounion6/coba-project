"use client"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import NextVideo from 'next-video';
import video2 from "../../videos/video5.mp4"
import Loader from './Loader';
import HomeCard from "./HomeCard";
import FondoHero from "../../public/assets/img/Fondos/Najuma 1.jpg"

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loader />;

  return (
    <div className='w-full h-screen relative object -z-10'>
        {/* <NextVideo
          src={video2}
          loop
          muted
          autoPlay
          controls={false}
          className='w-full h-full object-cover'
        /> */}
        <HomeCard 
        id=""
        titulo=""
        subtitulo=""
        parrafo=""
        imagen={FondoHero}
        />
    </div>
  );
};

export default Hero;
