import React, { useState } from 'react';
import CL from "../images/leclerc.png";
import CS from "../images/sainz.png";
import NUM16 from "../images/16.png";
import NUM55 from "../images/55.png";



const initialStats = [
  { criteria: 'WINS', value: 6 },
  { criteria: 'PODIUMS', value: 30 },
  { criteria: 'POLE POSITIONS', value: 27 },
  { criteria: 'LAST WIN', value: '2022 Bahrain GP' }
];

const Drivers = () => {
  const [driverStats, setDriverStats] = useState(initialStats);

  const handleImageHover = () => {
    const updatedStats = [...driverStats];
    updatedStats[0].value = 0;
    updatedStats[1].value = 0;
    updatedStats[2].value = 0;
    updatedStats[3].value = 0;
    setDriverStats(updatedStats);
  };

  const handleImageLeave = () => {
    const updatedStats = [...driverStats];
    updatedStats[0].value = 5;
    updatedStats[1].value = 4;
    updatedStats[2].value = 3;
    updatedStats[3].value = 2;
    setDriverStats(updatedStats);
  };
  


  return (
    <div style={{ height: "100vh" }} id='drivers'>
      <img src={CL} alt='leclerc' id='leclerc' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave} />
      <img src={CS} alt='sainz' id='sainz' />

      <div className='leclerc-info'>
        <img src={NUM16} alt='num16' id='num16' />
        <h2>Charles Leclerc</h2>
      </div>

      <div className='stats'>
        <table>
          <tbody>
            {driverStats.map((stat, index) => (
              <tr key={index}>
                <td className='criteria'>{stat.criteria}</td>
                <td className='value'>{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='sainz-info'>
        <img src={NUM55} alt='num55' id='num55' />
        <h2>Carlos Sainz</h2>
      </div>
    </div>
  );
};

export default Drivers;
