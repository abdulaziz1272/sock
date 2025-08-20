import { useState } from 'react'
import './App.css'

// Imported components
import Header from './Header';
import Hero from './Hero';
import Group from './Group';
import Market from './Market';
import Products from './Products';
import Look from './Look';
import Map from './Map';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Group/>
      <Market/>
      <Products/>
      <Look/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
