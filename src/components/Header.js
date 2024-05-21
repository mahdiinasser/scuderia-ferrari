import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../images/Ferrari-Scuderia-Symbol.png"



const Header = () => {
  return (
    <div className='header' id='header'>
        <a href='#news'><img src={LOGO} alt="logo" className='logo'/></a>

        <div className='navbar' id='nav'>
          <ul>
            <li><a href="#car">Car</a></li>
            <li><a href="#shop">Store</a></li>
            <li><a href="#drivers">Drivers</a></li>
            <li><a href="#about">About</a></li>
            
          </ul>
        </div>
    </div>
  );
}

export default Header;
