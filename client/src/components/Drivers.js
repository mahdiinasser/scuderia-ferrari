import React from 'react'
import CL from "../images/leclerc.png"
import CS from "../images/sainz.png"
import NUM16 from "../images/16.png"
import NUM55 from "../images/55.png"


const Drivers = () => {
  return (
    <div style={{ height: "100vh" }} id='drivers'>
      <img src={CL} alt='leclerc' id='leclerc' />
      <img src={CS} alt='sainz' id='sainz' />

      <div className='leclerc-info'>
        <img src={NUM16} alt='num16' id='num16' />
        <h2>Charles Leclerc</h2>
      </div>

      {/* <img src={BG} alt='bg' className='bg'></img> */}
      <div className='stats'>


        <table>
          <tbody>
            <tr>
              <td className='criteria'>WINS</td>
              <td className='value'>6</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className='criteria'>PODIUMS</td>
              <td className='value'>30</td>
            </tr>
            <tr>
              <td className='criteria'>POLE POSITIONS</td>
              <td className='value'>27</td>
            </tr>
            <tr>
              <td className='criteria'>LAST WIN</td>
              <td className='value'>2022 Bahrain GP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='sainz-info'>
        <img src={NUM55} alt='num55' id='num55' />
        <h2>Carlos Sainz</h2>
      </div>
    </div>
  )
}

export default Drivers
