import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import News from './News';
import CarSpecs from './CarSpecs'; 
import DriversStats from './DriversStats'; 
import AboutUs from './AboutUs'; 
import '../admin-style/Admin.css';

function Admin() {
  const [currentSection, setCurrentSection] = useState(() => {
    return localStorage.getItem('currentSection') || '';
  });

  useEffect(() => {
    localStorage.setItem('currentSection', currentSection);
  }, [currentSection]);

  const renderContent = () => {
    switch (currentSection) {
      case 'news':
        return <News />;
      case 'carspecs':
        return <CarSpecs />;
      case 'driversstats':
        return <DriversStats />;
      case 'aboutus':
        return <AboutUs />;
      default:
        return <p>Welcome to the admin page!</p>;
    }
  };

  return (
    <div className="admin-container">
      <Sidebar setCurrentSection={setCurrentSection} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Admin;
