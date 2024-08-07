import React, { useState } from 'react';
import './Hydration.css'; // Make sure this path matches your folder structure

import { Link } from 'react-router-dom';
import logo1 from '../../assets/l1.png'; 

const Hydration = () => {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [exercise, setExercise] = useState('');
  const [water, setWater] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const calculateWater = () => {
    const weightValue = parseFloat(weight);
    const ageValue = parseFloat(age);
    const exerciseValue = parseFloat(exercise);

    let ageMultiplier = 0;
    let waterForExercise = 0;

    if (ageValue < 30) {
      ageMultiplier = 40;
    } else if (ageValue >= 30 && ageValue <= 55) {
      ageMultiplier = 35;
    } else {
      ageMultiplier = 30;
    }

    let waterValue = ((weightValue / 2.2) * ageMultiplier) / 28.3;

    if (exerciseValue > 0) {
      waterForExercise = exerciseValue * 0.7619047619;
    }

    waterValue += waterForExercise;
    setWater(`${waterValue.toFixed(0)} Ounces or ${(waterValue / 8).toFixed(0)} Cups Daily`);
  };

  return (
    <div className="hybody">

      <Link to="../../CalmNCare-home"><img src={logo1} alt="" class="logo1"/> </Link> 
    <div className="water-calculator">
      <h1>Water Intake Calculator</h1>
      <div className="input-container">
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="exercise">Exercise (minutes/day):</label>
        <input
          type="number"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <br />
        <button onClick={calculateWater}>Calculate Water Intake</button>
      </div>
      <div id="display" className="display">
        {water}
      </div>
      <div className="info">
      </div>
      <br />
      <br />
      <br /><br />
    </div>
    </div>
  );
};

export default Hydration;