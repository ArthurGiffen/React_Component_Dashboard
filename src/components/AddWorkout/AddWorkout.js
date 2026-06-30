import React, { useState } from 'react';
import './AddWorkout.css';

function AddWorkout({ addWorkout }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Cardio');
  const [minutes, setMinutes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newWorkout = {
      id: Date.now(),
      name: name,
      type: type,
      minutes: minutes,
      done: false,
    };

    addWorkout(newWorkout);

    setName('');
    setType('Cardio');
    setMinutes('');
  }

  return (
    <div className="add-workout">
      <h2>Add a Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Workout Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Bench Press"
          />
        </div>

        <div className="form-group">
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Cardio</option>
            <option>Strength</option>
            <option>Flexibility</option>
            <option>Sports</option>
          </select>
        </div>

        <div className="form-group">
          <label>Minutes:</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="e.g. 30"
          />
        </div>

        <button type="submit" className="submit-btn">Add Workout</button>
      </form>
    </div>
  );
}

export default AddWorkout;
