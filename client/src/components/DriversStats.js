import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin-style/DriversStats.css';

const DriversStats = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const [editedDrivers, setEditedDrivers] = useState({});

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get('/api/v1/drivers');
                setDrivers(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching drivers');
                setLoading(false);
            }
        };

        fetchDrivers();
    }, []);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setEditedDrivers((prevEditedDrivers) => ({
            ...prevEditedDrivers,
            [index]: {
                ...prevEditedDrivers[index],
                [name]: value,
            },
        }));
    };

    const handleEdit = () => {
        setEditMode(true);
        // Initialize editedDrivers with current drivers data
        const initialEditedDrivers = {};
        drivers.forEach((item, index) => {
            initialEditedDrivers[index] = { ...item };
        });
        setEditedDrivers(initialEditedDrivers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update all drivers items
            await Promise.all(
                Object.keys(editedDrivers).map(async (index) => {
                    const response = await axios.put(`/api/v1/drivers/${drivers[index]._id}`, editedDrivers[index]);
                    return response.data;
                })
            );
            alert('Drivers updated successfully!');
            window.location.reload();
        } catch (err) {
            console.error('Error updating drivers:', err);
            setError(`Error updating drivers: ${err.message}`);
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
            {!editMode && (
                <div>
                    <h2>Drivers</h2>
                    {drivers.map((item, index) => (
                        <div key={index}>
                            <h3>Driver {index + 1}</h3>
                            <p>Name: {item.name}</p>
                            <p>Wins: {item.wins}</p>
                            <p>Podiums: {item.podiums}</p>
                            <p>Poles: {item.poles}</p>
                            <p>Last Win: {item.last_w}</p>
                            <hr />
                        </div>
                    ))}
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}

            {editMode && (
                <div>
                    <h2>Edit Drivers</h2>
                    <form onSubmit={handleSubmit}>
                        {drivers.map((item, index) => (
                            <div key={index} style={{ marginBottom: "20px" }}>
                                <h3>Edit Driver {index + 1}</h3>
                                <label htmlFor={`name${index}`}>Name:</label>
                                <input
                                    type="text"
                                    id={`name${index}`}
                                    name="name"
                                    value={editedDrivers[index]?.name || item.name}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                                <label htmlFor={`wins${index}`}>Wins:</label>
                                <input
                                    type="number"
                                    id={`wins${index}`}
                                    name="wins"
                                    value={editedDrivers[index]?.wins || item.wins}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                                <label htmlFor={`podiums${index}`}>Podiums:</label>
                                <input
                                    type="number"
                                    id={`podiums${index}`}
                                    name="podiums"
                                    value={editedDrivers[index]?.podiums || item.podiums}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                                <label htmlFor={`poles${index}`}>Poles:</label>
                                <input
                                    type="number"
                                    id={`poles${index}`}
                                    name="poles"
                                    value={editedDrivers[index]?.poles || item.poles}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                                <label htmlFor={`last_w${index}`}>Last Win:</label>
                                <input
                                    type="text"
                                    id={`last_w${index}`}
                                    name="last_w"
                                    value={editedDrivers[index]?.last_w || item.last_w}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                            </div>
                        ))}
                        <button type="submit">Update Drivers</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default DriversStats;
