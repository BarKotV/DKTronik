import React from 'react';
import './App.scss';
import Nav from "./Components/Nav";
import Carousel from "./Components/Carousel";
import InfoBars from "./Components/InfoBars";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
    <Nav />
    <Carousel />
    <InfoBars />
    <Footer />
    </div>
  );
}

export default App;
