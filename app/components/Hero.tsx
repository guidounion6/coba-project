"use client"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import NextVideo from 'next-video';
import video2 from "../../videos/video5.mp4"
import Loader from './Loader';

import FondoHero from "../../public/assets/img/Fondos/Teramal.jpeg"
import Image from "next/image";

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
        <Image 
        alt="el fondo del hero, un deposito de papa refrigerado vista desde el aire"
        src={FondoHero}
        layout="fill"
        />
    </div>
  );
};

export default Hero;
