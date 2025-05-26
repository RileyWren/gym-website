import React from 'react';
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import Navbar from './Navbar';
import Button from './Button';
import Rating from './Rating';
import man from "../assets/man.jpeg"

const Hero = () => {
  return (
  <div
  className="relative h-screen bg-cover bg-center flex flex-col justify-center text-center items-center"
  style={{ backgroundImage: `url(${hero1})` }}
>
  {/* Overlay - sits behind content */}
  <div className="absolute inset-0 bg-black/80 z-0"></div>

  {/* Content wrapper - sits on top of overlay */}
  <div className="relative z-10 mt-20">
    <Navbar />
    <div className="p-10 text-white max-w-4xl h-screen flex flex-col justify-center text-center items-center sm:text-center md:text-center m-0">
      <h1 className="text-5xl font-bold mb-4 sm:text-6xl">
        Crush your health and fitness goals in no time
      </h1>
      <br></br>
      <h4 className="text-lg mb-6 max-w-2xl">
        It doesn’t matter if your goal is to get stronger, burn fat, or just stay fit – our world-class coaches will guide you every step of the way.
      </h4>
      <div className='mb-15 '>
      <Button content="Start 7 day free trial"/>
      </div>
      <div className=''>
    <Rating />
    </div>
    <div className='flex justify-center items-center text-center'>
      <img src={man} className=' rounded-full w-15 h-15 aspect-square object-cover mr-5'/>
      <p className='max-w-96'>“6 months after joining I lost 15lbs and I’m getting stronger.”</p>
    </div>
    </div>
  </div>

</div>

  );
};

export default Hero;
