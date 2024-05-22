import React, { useState } from 'react';
import '../CarSpecs.css';

function CarSpecs() {
  const initialCarSpecs = [
    {
      title: 'Car Model',
      horsepower: '500 HP',
      engine: 'V8 Engine',
      batteryEnergy: '20 kWh',
      totalDisplacement: '4.0 L',
      mgukPower: '120 kW',
    }
  ];

  const [carSpecs, setCarSpecs] = useState(initialCarSpecs);
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index, field) => {
    const newCarSpecs = [...carSpecs];
    newCarSpecs[index][field] = e.target.value;
    setCarSpecs(newCarSpecs);
  };

  return (
    <div className="car-specs-container">
      <h2>Car Specifications</h2>
      {carSpecs.map((item, index) => (
        <div key={index} className="car-spec-item">
          <div className="car-spec-content">
            {isEditing === index ? (
              <>
               <h3>{item.title}</h3>
                <input
                  type="text"
                  value={item.horsepower}
                  onChange={(e) => handleChange(e, index, 'horsepower')}
                />
                <input
                  type="text"
                  value={item.engine}
                  onChange={(e) => handleChange(e, index, 'engine')}
                />
                <input
                  type="text"
                  value={item.batteryEnergy}
                  onChange={(e) => handleChange(e, index, 'batteryEnergy')}
                />
                <input
                  type="text"
                  value={item.totalDisplacement}
                  onChange={(e) => handleChange(e, index, 'totalDisplacement')}
                />
                <input
                  type="text"
                  value={item.mgukPower}
                  onChange={(e) => handleChange(e, index, 'mgukPower')}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>Horsepower: {item.horsepower}</p>
                <p>Engine: {item.engine}</p>
                <p>Battery Energy: {item.batteryEnergy}</p>
                <p>Total Displacement: {item.totalDisplacement}</p>
                <p>MGU-K Power: {item.mgukPower}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarSpecs;
