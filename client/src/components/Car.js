import React from 'react'

const Car = () => {
    return (          
            <div className="sketchfab-embed-wrapper" id='car'>
                <h2>Ferrari SF-24</h2>
                <iframe
                    title="F1 Ferrari SF-24"
                    allowFullScreen
                    mozAllowFullScreen="true"
                    webkitAllowFullScreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/eccf78a17c0548a7bc44e1f2ea227a99/embed?quality=hd"
                />
                <br/>
                <br/>
                <ul>
                    <label for="hp">HORSEPOWER </label>
                    <li id='hp'> 747 HP</li>

                    <label for="engine">ENGINE</label>
                    <li id='engine'>V6</li>
                    
                    <label for="energy">BATTERY ENERGY</label>
                    <li id='energy'>4 MJ</li>
                    
                    <label for="cc">TOTAL DISPLACEMENT</label>
                    <li id='cc'>1600 cc</li>
                    
                    <label for="power">MGU-K POWER</label>
                    <li id='power'>120 kW</li>
                </ul>
            </div>

    )
}

export default Car
