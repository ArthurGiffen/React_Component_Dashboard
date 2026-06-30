import React, { useState } from 'react';
import Header from './components/Header/Header';
import WorkoutList from './components/WorkoutList/WorkoutList';
import AddWorkout from './components/AddWorkout/AddWorkout';
import StatsBox from './components/StatsBox/StatsBox';
import AboutPage from './components/AboutPage/AboutPage';
import './App.css';

const startingWorkouts = [
  { id: 1, name: 'Push Ups', type: 'Strength', minutes: 20, done: false },
  { id: 2, name: 'Morning Run', type: 'Cardio', minutes: 30, done: false },
  { id: 3, name: 'Sit Ups', type: 'Strength', minutes: 15, done: true },
];

function App() {
  // state 1 - which page we are on
  const [page, setPage] = useState('home');

  // state 2 - the workout list
  const [workouts, setWorkouts] = useState(startingWorkouts);

  // state 3 - dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  function addWorkout(workout) {
    setWorkouts([...workouts, workout]);
  }

  function toggleDone(id) {
    setWorkouts(workouts.map(w => w.id === id ? { ...w, done: !w.done } : w));
  }

  function deleteWorkout(id) {
    setWorkouts(workouts.filter(w => w.id !== id));
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header page={page} setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />

      {page === 'home' ? (
        <div className="main">
          <StatsBox workouts={workouts} />
          <WorkoutList workouts={workouts} toggleDone={toggleDone} deleteWorkout={deleteWorkout} />
          <AddWorkout addWorkout={addWorkout} />
        </div>
      ) : (
        <AboutPage />
      )}
    </div>
  );
}

export default App;
