import React, { useState } from 'react';
import '../News.css';




function News() {
  const initialNewsItems = [
    {
      title: 'News Title 1',
      caption: 'Summary of news article 1...',
      image: 'image1.jpg', 
    },
    {
      title: 'News Title 2',
      caption: 'Summary of news article 2...',
      image: 'image2.jpg', 
    },
    {
      title: 'News Title 3',
      caption: 'Summary of news article 3...',
      image: 'image3.jpg', 
    },
  ];

  const [newsItems, setNewsItems] = useState(initialNewsItems);
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index, field) => {
    const newNewsItems = [...newsItems];
    newNewsItems[index][field] = e.target.value;
    setNewsItems(newNewsItems);
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <img src={item.image} alt={item.title} className="news-image" />
          <div className="news-content">
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleChange(e, index, 'title')}
                />
                <textarea
                  value={item.caption}
                  onChange={(e) => handleChange(e, index, 'caption')}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
