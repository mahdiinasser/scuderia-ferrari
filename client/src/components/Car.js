import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Car = () => {
    const [specs, setSpecs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpecs = async () => {
            try {
                const response = await axios.get('/api/v1/specs');
                setSpecs(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching specs');
                setLoading(false);
            }
        };

        fetchSpecs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
            <br />
            <br />
            <ul>
                {specs.length > 0 ? specs.map((spec) => (
                    <div key={spec._id}>
                        <label htmlFor="hp">HORSEPOWER </label>
                        <li id='hp'>{spec.horsepower}</li>

                        <label htmlFor="engine">ENGINE</label>
                        <li id='engine'>{spec.engine}</li>

                        <label htmlFor="energy">BATTERY ENERGY</label>
                        <li id='energy'>{spec.energy}</li>

                        <label htmlFor="cc">TOTAL DISPLACEMENT</label>
                        <li id='cc'>{spec.displacement}</li>

                        <label htmlFor="power">MGU-K POWER</label>
                        <li id='power'>{spec.power}</li>
                    </div>
                )) : <li>No specs available</li>}
            </ul>
        </div>
    );
}

export default Car;
