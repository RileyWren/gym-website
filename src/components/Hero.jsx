import React from 'react';
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
  <div
  className="relative h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${hero1})` }}
>
  {/* Overlay - sits behind content */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Content wrapper - sits on top of overlay */}
  <div className="relative z-10 ">
    <Navbar />
    <div className="p-10 text-white max-w-4xl h-screen flex flex-col justify-center text-center items-center sm:text-center md:text-center m-0">
      <h1 className="text-4xl font-bold mb-4">
        Crush your health and fitness goals in no time
      </h1>
      <h4 className="text-lg mb-6">
        It doesn’t matter if your goal is to get stronger, burn fat, or just stay fit – our world-class coaches will guide you every step of the way.
      </h4>
      <Button content="Start 7 day free trial" />
    </div>
  </div>
</div>

  );
};

export default Hero;
