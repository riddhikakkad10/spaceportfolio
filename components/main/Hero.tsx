import React from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
        <video 
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-800px] h-full w-full left-0 z-[1] object-cover"
        >
            <source src="/sky.mp4" type="video/mp4" />
        </video>
        <HeroContent />
    </div>
  );
};

export default Hero;