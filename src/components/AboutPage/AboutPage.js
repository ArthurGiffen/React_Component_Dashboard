import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>This is a example Workout Tracker dashboard built with React</p>

      <h3>Components Used</h3>
      <ul>
        <li><strong>App.js</strong> - main parent component</li>
        <li><strong>Header</strong> - shows the title and navigation</li>
        <li><strong>StatsBox</strong> - shows total workouts and minutes</li>
        <li><strong>WorkoutList</strong> - loops through workouts with displays each one</li>
        <li><strong>AddWorkout</strong> - controlled form to add new workouts</li>
        <li><strong>AboutPage</strong> - this is the page currently on</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>Add new workouts</li>
        <li>Mark workouts as done</li>
        <li>Delete workouts</li>
        <li>Toggle dark mode</li>
      </ul>
    </div>
  );
}

export default AboutPage;
