import React, { useState } from 'react';
import './FoodRecommendation.css'; // Ensure this is the path to your CSS file
import Navbar from '../Navbar1/Navbar1';
import Banner from '../Banner/Banner';

const CropForm = () => {
    const [nutrient, setNutrient] = useState('');
    const [vegChoice, setVegChoice] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nutrient.trim()) {
            setMessage('Please enter a nutrient.');
            return;
        }
        if (!vegChoice) {
            setMessage('Please select a choice.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([{ nutrient, veg_choice: vegChoice }]),
            });
            const data = await response.json();

            console.log('Fetched Data:', data);

            if (response.ok) {
                setRecommendations(data.recommendations);
                setMessage('');
            } else {
                setMessage(data.message || 'An error occurred.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <div className="foodbody">
            <Navbar />
            <Banner />
        <div className="container">
            <header>
                <h1>Food Recommendations</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nutrient">Nutrient:</label>
                <input
                    type="text"
                    id="nutrient"
                    value={nutrient}
                    onChange={(e) => setNutrient(e.target.value)}
                    required
                />
                <label htmlFor="veg_choice">Choose:</label>
                <select
                    id="veg_choice"
                    value={vegChoice}
                    onChange={(e) => setVegChoice(e.target.value)}
                    required
                >
                    <option value="">Select</option>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                </select>
                <button type="submit">Get Recommendations</button>
            </form>

            {message && <p className="message">{message}</p>}

            {recommendations.length > 0 && (
                <div className="recommendations">
                    <h2>Recommendations for {nutrient} ({vegChoice})</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Food Item</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec, index) => (
                                <tr key={index}>
                                    <td>{rec.food}</td>
                                    <td>{rec.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        </div>
    );
};

export default CropForm;
