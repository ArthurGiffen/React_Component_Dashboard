import React from 'react';
import './WorkoutList.css';

function WorkoutList({ workouts, toggleDone, deleteWorkout }) {
  return (
    <div className="workout-list">
      <h2>My Workouts</h2>

      {workouts.map(workout => (
        <div key={workout.id} className={workout.done ? 'workout-item done' : 'workout-item'}>
          <div className="workout-info">
            <p className="workout-name">{workout.name}</p>
            <p className="workout-details">{workout.type} — {workout.minutes} mins</p>
          </div>
          <div className="workout-buttons">
            <button className="done-btn" onClick={() => toggleDone(workout.id)}>
              {workout.done ? 'Undo' : 'Done'}
            </button>
            <button className="delete-btn" onClick={() => deleteWorkout(workout.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      {workouts.length === 0 && <p>No workouts yet. Add one below!</p>}
    </div>
  );
}

export default WorkoutList;
