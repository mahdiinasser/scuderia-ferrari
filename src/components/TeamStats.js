import React, { useState } from 'react';
import '../TeamStats.css'; 

function TeamStats() {
  const initialTeamStats = [
    {
      teamName: 'Team Name',
      wins: 6,
      podiums: 30,
      polePositions: 27,
      lastWin: '2022 Bahrain GP',
    }
  ];

  const [teamStats, setTeamStats] = useState(initialTeamStats);
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index, field) => {
    const newTeamStats = [...teamStats];
    newTeamStats[index][field] = e.target.value;
    setTeamStats(newTeamStats);
  };

  return (
    <div className="team-stats-container">
      <h2>Team Stats</h2>
      {teamStats.map((team, index) => (
        <div key={index} className="team-stats-item">
          <div className="team-stats-content">
            {isEditing === index ? (
              <>
                <h3>{team.teamName}</h3>
                <input
                  type="text"
                  value={team.wins}
                  onChange={(e) => handleChange(e, index, 'wins')}
                />
                <input
                  type="text"
                  value={team.podiums}
                  onChange={(e) => handleChange(e, index, 'podiums')}
                />
                <input
                  type="text"
                  value={team.polePositions}
                  onChange={(e) => handleChange(e, index, 'polePositions')}
                />
                <input
                  type="text"
                  value={team.lastWin}
                  onChange={(e) => handleChange(e, index, 'lastWin')}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <h3>{team.teamName}</h3>
                <p>Wins: {team.wins}</p>
                <p>Podiums: {team.podiums}</p>
                <p>Pole Positions: {team.polePositions}</p>
                <p>Last Win: {team.lastWin}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamStats;
