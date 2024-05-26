import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
    const [about, setAbout] = useState('');
    const [updatedAbout, setUpdatedAbout] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = '6651112d1249b1f41eb4caef'; 

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                console.log(`Fetching about from /api/v1/about/`);
                const response = await axios.get('/api/v1/about/');
                console.log('Response data:', response.data);
                setAbout(response.data.data[0].text); 
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

    const handleCancel = () => {
        setEditMode(false);
        setUpdatedAbout('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/about/${id}`, { text: updatedAbout });
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
                <div style={{width:"70vw"}}>
                    <h2>Edit About</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea style={{width:"100%", height:"250px"}} value={updatedAbout} onChange={handleChange} />
                        <button type="submit">Update</button>
                        <button style={{marginLeft:"5px"}}  type="button" onClick={handleCancel}>Cancel</button>
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
