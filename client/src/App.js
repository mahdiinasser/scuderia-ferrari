import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import NewsCarousel from "./components/NewsCarousel";
import Car from './components/Car';
import Drivers from "./components/Drivers";
import Shop from "./components/Shop";
import About from "./components/About";
import Admin from "./components/Admin";

function BackgroundSetter() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      document.body.style.backgroundColor = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = "#131313";
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <BackgroundSetter />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <NewsCarousel />
            <Car />
            <Shop />
            <Drivers />
            <About />
          </>
        } />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
