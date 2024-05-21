import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import NewsCarousel from "./components/NewsCarousel";
import Car from './components/Car';
import Drivers from "./components/Drivers";
import Shop from "./components/Shop";
import About from "./components/About";


document.body.style.backgroundColor = "#131313";

function App() {
  return (
    
    <>
      <Header /> 
      <NewsCarousel />
      <Car />
      <Shop/>
      <Drivers/> 
      <About/>

    </>
    
  );
}

export default App;
