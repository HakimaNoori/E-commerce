import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos"
const App = () => {

  React.useEffect(() => {
    
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />

    </div>
  )
}

export default App
