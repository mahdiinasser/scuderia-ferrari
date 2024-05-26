import React from 'react';
import '../Sidebar.css'; 

function Sidebar({ setCurrentSection }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#news" onClick={() => setCurrentSection('news')}>News</a></li>
        <li><a href="#carspecs" onClick={() => setCurrentSection('carspecs')}>Car Specs</a></li>
        <li><a href="#teamstats" onClick={() => setCurrentSection('teamstats')}>Team Stats</a></li>
        <li><a href="#driversstats" onClick={() => setCurrentSection('driversstats')}>Drivers Stats</a></li>
        <li><a href="#aboutus" onClick={() => setCurrentSection('aboutus')}>About Us</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;