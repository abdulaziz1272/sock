import React from 'react';
import './Hero.css';
import HeroImg from './assets/krasofka.png';

function Hero() {
  return (
    <div className='hero-bar'>
        <h1>Zamonaviy kiyimlar trendy bilan</h1>
        <button>Bog’lanish</button>
        <img src={HeroImg} alt="heroImg" />
    </div>
  )
}

export default Hero