import React from 'react';
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-blend-darken"
      style={{ backgroundImage: `url(${hero1})` }}
    >
        <Navbar />
    </div>
  );
};

export default Hero;
