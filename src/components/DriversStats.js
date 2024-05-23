import React, { useState } from 'react';
import '../DriversStats.css';

function DriversStats() {
  const initialDriverStats = [
    {
      title: 'Driver Name',
      wins: 6,
      podiums: 30,
      polePositions: 27,
      lastWin: '2022 Bahrain GP',
      image: 'driver_image.jpg',
    },
    {
      title: 'Driver Name2',
      wins: 9,
      podiums: 31,
      polePositions: 3,
      lastWin: '2021 Bahrain GP',
      image: 'driver_image1.jpg',
    },
  ];

  const [driverStats, setDriverStats] = useState(initialDriverStats);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e, index, field) => {
    const newDriverStats = [...driverStats];
    newDriverStats[index][field] = e.target.value;
    setDriverStats(newDriverStats);
  };

  const handleImageChange = (e, index) => {
    const newDriverStats = [...driverStats];
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newDriverStats[index].image = reader.result;
        setDriverStats(newDriverStats);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="drivers-stats-container">
      <h2>Driver Stats</h2>
      {driverStats.map((driver, index) => (
        <div className="drivers-stats-item" key={index}>
          <img src={driver.image} alt="Driver" className="driver-image" />
          <div className="drivers-stats-content">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={driver.title}
                  onChange={(e) => handleChange(e, index, 'title')}
                />
                <input
                  type="number"
                  value={driver.wins}
                  onChange={(e) => handleChange(e, index, 'wins')}
                />
                <input
                  type="number"
                  value={driver.podiums}
                  onChange={(e) => handleChange(e, index, 'podiums')}
                />
                <input
                  type="number"
                  value={driver.polePositions}
                  onChange={(e) => handleChange(e, index, 'polePositions')}
                />
                <input
                  type="text"
                  value={driver.lastWin}
                  onChange={(e) => handleChange(e, index, 'lastWin')}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <ul>
                  <h3>{driver.title}</h3>
                  <li>Wins: {driver.wins}</li>
                  <li>Podiums: {driver.podiums}</li>
                  <li>Pole Positions: {driver.polePositions}</li>
                  <li>Last Win: {driver.lastWin}</li>
                </ul>
                <button onClick={handleEdit}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DriversStats;
