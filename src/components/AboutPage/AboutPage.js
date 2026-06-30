import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>This is my Workout Tracker dashboard built with React for my web development class.</p>

      <h3>Components Used</h3>
      <ul>
        <li><strong>App.js</strong> - main parent component, holds all the state</li>
        <li><strong>Header</strong> - shows the title and navigation buttons</li>
        <li><strong>StatsBox</strong> - shows total workouts, completed, and total minutes</li>
        <li><strong>WorkoutList</strong> - loops through workouts with .map() and displays each one</li>
        <li><strong>AddWorkout</strong> - controlled form to add new workouts</li>
        <li><strong>AboutPage</strong> - this page!</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>Add new workouts using the form</li>
        <li>Mark workouts as done or undo them</li>
        <li>Delete workouts from the list</li>
        <li>See live stats update at the top</li>
        <li>Toggle dark mode</li>
      </ul>
    </div>
  );
}

export default AboutPage;
