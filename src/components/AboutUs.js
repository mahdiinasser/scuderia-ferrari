import React, { useState } from 'react';
import '../AboutUs.css'; 

function AboutUs() {
  const initialAboutText = "Lilo pretty";

  const [aboutText, setAboutText] = useState(initialAboutText);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setAboutText(e.target.value);
  };

  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="about-us-content">
        {isEditing ? (
          <>
            <textarea
              value={aboutText}
              onChange={handleChange}
              className="about-us-textarea"
            />
            <button onClick={handleSave} className="about-us-button">Save</button>
          </>
        ) : (
          <>
            <p>{aboutText}</p>
            <button onClick={handleEdit} className="about-us-button">Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
