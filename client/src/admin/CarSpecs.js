import React, { useState, useEffect } from 'react';
import '../admin-style/CarSpecs.css';
import axios from 'axios';

const Test = () => {
    const [specs, setSpecs] = useState({
        horsepower: '',
        engine: '',
        energy: '',
        displacement: '',
        power: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = '6650f593f6b860f49ded431a'; 

    useEffect(() => {
        const fetchSpecs = async () => {
            try {
                console.log(`Fetching specs from /api/v1/specs/`);
                const response = await axios.get('/api/v1/specs/');
                console.log('Response data:', response.data);
                setSpecs(response.data.data); 
                setLoading(false);
            } catch (err) {
                console.error('Error fetching specs:', err);
                setError(`Error fetching specs: ${err.message}`);
                setLoading(false);
            }
        };

        fetchSpecs();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpecs((prevSpecs) => ({
            ...prevSpecs,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/specs/${id}`, specs);
            alert('Specs updated successfully!');
            window.location.reload();
        } catch (err) {
            console.error('Error updating specs:', err);
            setError(`Error updating specs: ${err.message}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Update Specs</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="horsepower">Horsepower:</label>
                    <input
                        type="text"
                        id="horsepower"
                        name="horsepower"
                        placeholder={specs[0].horsepower}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        placeholder={specs[0].engine}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="energy">Energy:</label>
                    <input
                        type="text"
                        id="energy"
                        name="energy"
                        placeholder={specs[0].energy}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="displacement">Displacement:</label>
                    <input
                        type="text"
                        id="displacement"
                        name="displacement"
                        placeholder={specs[0].displacement}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="power">Power:</label>
                    <input
                        type="text"
                        id="power"
                        name="power"
                        placeholder={specs[0].power}
                        onChange={handleChange}
                    />
                </div>
                <button style={{marginTop:"5px"}} type="submit">Update Specs</button>
            </form>
        </div>
    );
};

export default Test;
