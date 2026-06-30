import React from 'react';
import './StatsBox.css';

function StatsBox({ workouts }) {
  const total = workouts.length;
  const done = workouts.filter(w => w.done).length;
  const totalMins = workouts.reduce((sum, w) => sum + Number(w.minutes), 0);

  return (
    <div className="stats-box">
      <div className="stat">
        <p className="stat-num">{total}</p>
        <p className="stat-label">Total Workouts</p>
      </div>
      <div className="stat">
        <p className="stat-num">{done}</p>
        <p className="stat-label">Completed</p>
      </div>
      <div className="stat">
        <p className="stat-num">{totalMins}</p>
        <p className="stat-label">Total Minutes</p>
      </div>
    </div>
  );
}

export default StatsBox;
