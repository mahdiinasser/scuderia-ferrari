import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
    const [about, setAbout] = useState('');
    const [updatedAbout, setUpdatedAbout] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = '6651112d1249b1f41eb4caef'; // Replace with the actual ID

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                console.log(`Fetching about from /api/v1/about/`);
                const response = await axios.get('/api/v1/about/');
                console.log('Response data:', response.data);
                setAbout(response.data.data[0].text); // Assuming only one about text exists
                setLoading(false);
            } catch (err) {
                console.error('Error fetching about:', err);
                setError(`Error fetching about: ${err.message}`);
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    const handleEditClick = () => {
        setUpdatedAbout(about);
        setEditMode(true);
    };

    const handleChange = (e) => {
        setUpdatedAbout(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/v1/about/${id}`, { text: updatedAbout });
            alert('About updated successfully!');
            window.location.reload();
        } catch (err) {
            console.error('Error updating about:', err);
            setError(`Error updating about: ${err.message}`);
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
            {editMode ? (
                <div>
                    <h2>Edit About</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea value={updatedAbout} onChange={handleChange} />
                        <button type="submit">Update</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>About Us</h2>
                    <p>{about}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
