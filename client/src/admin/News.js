import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin-style/News.css'

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const [editedNews, setEditedNews] = useState({});

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/v1/news');
                setNews(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching news');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setEditedNews((prevEditedNews) => ({
            ...prevEditedNews,
            [index]: {
                ...prevEditedNews[index],
                [name]: value,
            },
        }));
    };

    const handleEdit = () => {
        setEditMode(true);
        // Initialize editedNews with current news data
        const initialEditedNews = {};
        news.forEach((item, index) => {
            initialEditedNews[index] = { ...item };
        });
        setEditedNews(initialEditedNews);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedNews({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update all news items
            await Promise.all(
                Object.keys(editedNews).map(async (index) => {
                    const response = await axios.put(`/api/v1/news/${news[index]._id}`, editedNews[index]);
                    return response.data;
                })
            );
            alert('News updated successfully!');
            window.location.reload();
        } catch (err) {
            console.error('Error updating news:', err);
            setError(`Error updating news: ${err.message}`);
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
                    <h2>News</h2>
                    {news.map((item, index) => (
                        <div key={index}>
                            <h3>News {index + 1}</h3>
                            <p>Title: {item.title}</p>
                            <p>Caption: {item.caption}</p>
                            <hr />
                        </div>
                    ))}
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}

            {editMode && (
                <div>
                    <h2>Edit News</h2>
                    <form onSubmit={handleSubmit}>
                        {news.map((item, index) => (
                            <div key={index} style={{marginBottom: "20px"}}>
                                <h3>Edit News {index + 1}</h3>
                                <label htmlFor={`title${index}`}>Title:</label>
                                <input
                                    type="text"
                                    id={`title${index}`}
                                    name="title"
                                    value={editedNews[index]?.title || item.title}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                                <label htmlFor={`caption${index}`}>Caption:</label>
                                <input
                                    style={{width:"1000px"}}
                                    type="text"
                                    id={`caption${index}`}
                                    name="caption"
                                    value={editedNews[index]?.caption || item.caption}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <br />
                            </div>
                        ))}
                        <button type="submit">Update News</button>
                        <button style={{marginLeft:"5px"}} type="button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default News;
