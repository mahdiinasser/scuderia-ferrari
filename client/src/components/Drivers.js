import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CL from "../images/leclerc.png";
import CS from "../images/sainz.png";
import NUM16 from "../images/16.png";
import NUM55 from "../images/55.png";



function compare(str1, str2) {
 
  const lastTwoDigitsStr1 = parseInt(str1.split(' ').pop());
  const lastTwoDigitsStr2 = parseInt(str2.split(' ').pop());

  
  if (lastTwoDigitsStr1 > lastTwoDigitsStr2) {
      return str1;
  } else {
      return str2;
  }
}

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('/api/v1/drivers');
        setDrivers(response.data.data);
        const initialDisplay = [
          { criteria: 'WINS', value: response.data.data[0].wins + response.data.data[1].wins },
          { criteria: 'PODIUMS', value: response.data.data[0].podiums + response.data.data[1].podiums },
          { criteria: 'POLE POSITIONS', value: response.data.data[0].poles + response.data.data[1].poles },
          { criteria: 'LAST WIN' , value: compare(response.data.data[0].last_w,response.data.data[1].last_w) }
        ];
        setDisplay(initialDisplay);
        setLoading(false);
      } catch (err) {
        setError('Error fetching drivers');
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const driver1Display = [
    { criteria: 'WINS', value: drivers[0].wins },
    { criteria: 'PODIUMS', value: drivers[0].podiums },
    { criteria: 'POLE POSITIONS', value: drivers[0].poles },
    { criteria: 'LAST WIN', value: drivers[0].last_w }
  ];

  const driver2Display = [
    { criteria: 'WINS', value: drivers[1].wins },
    { criteria: 'PODIUMS', value: drivers[1].podiums },
    { criteria: 'POLE POSITIONS', value: drivers[1].poles },
    { criteria: 'LAST WIN', value: drivers[1].last_w }
  ];

  const handleMouseEnterDriver1 = () => {
    setDisplay(driver1Display);
  };

  const handleMouseEnterDriver2 = () => {
    setDisplay(driver2Display);
  };

  const handleMouseLeave = () => {
    const initialDisplay = [
      { criteria: 'WINS', value: drivers[0].wins + drivers[1].wins },
      { criteria: 'PODIUMS', value: drivers[0].podiums + drivers[1].podiums },
      { criteria: 'POLE POSITIONS', value: drivers[0].poles + drivers[1].poles },
      { criteria: 'LAST WIN', value: compare(drivers[1].last_w, drivers[0].last_w) }
    ];
    setDisplay(initialDisplay);
  };

  return (
    <div style={{ height: "100vh" }} id='drivers'>
      <img 
        src={CL} 
        alt='leclerc' 
        id='leclerc' 
        onMouseEnter={handleMouseEnterDriver1} 
        onMouseLeave={handleMouseLeave} 
      />
      <img 
        src={CS} 
        alt='sainz' 
        id='sainz' 
        onMouseEnter={handleMouseEnterDriver2} 
        onMouseLeave={handleMouseLeave} 
      />

      <div className='leclerc-info'>
        <img src={NUM16} alt='num16' id='num16' />
        <h2>{drivers[0].name}</h2>
      </div>

      <div className='stats'>
        <table>
          <tbody>
            {display.map((stat, index) => (
              <tr key={index}>
                <td className='criteria' >{stat.criteria}</td>
                <td className='value' >{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='sainz-info'>
        <img src={NUM55} alt='num55' id='num55' />
        <h2>{drivers[1].name}</h2>
      </div>
    </div>
  );
};

export default Drivers;
