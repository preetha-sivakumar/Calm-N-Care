import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './Meditation.css';
import logo1 from '../../assets/l1.png'; 

import { Link } from 'react-router-dom';

// Initial time and words settings for the meditation phases
const initialTime = [5, 5, 5, 5];
const initialWords = ["inhale", "hold", "exhale", "pause"];

// Styled-components for styling the meditation app

// Container for the entire application, centered with a light blue background
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #add8e6;
`;

// Main view area, centered with flexible growth to fill available space
const MainView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: relative;
`;

// Styled circle that represents the breathing phase, changes size based on the phase
const CircleStyled = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #89c9b8;
    transition: all ${props => props.time}s ease-in-out;
    transform: scale(${props => props.scale});
`;

// Keyframes for the orbit animation
const orbitAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// Container for orbiting animation, positioned absolutely with a circular border
const OrbitContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${orbitAnimation} 10s linear infinite;
`;

// Small circle that orbits around the main circle
const OrbitingCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #3498db;
    position: absolute;
    top: 0;
`;

// Styled text displayed during meditation phases, hidden or shown based on state
const TextStyled = styled.div`
    margin-top: 20px;
    font-size: 2rem;
    color: ${props => props.textDisplay ? 'black' : 'transparent'};
    cursor: pointer;
`;

// Sidebar for settings, sliding in and out from the right side
const SidebarStyled = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.sidebarOpen ? '0' : '-250px'};
    width: 250px;
    height: 100%;
    background-color: #34495e;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    color: white;

    h2 {
        margin-bottom: 20px;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    input {
        margin-top: 5px;
        padding: 5px;
        border: none;
        border-radius: 4px;
    }

    button {
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: #2980b9;
        color: white;
        cursor: pointer;

        &:hover {
            background-color: #3498db;
        }
    }
`;

// Button to toggle the sidebar open/closed
const SidebarToggle = styled.button`
    position: fixed;
    top: 20px;
    right: ${props => props.sidebarOpen ? '250px' : '20px'};
    z-index: 1000;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #2980b9;
    color: white;
    cursor: pointer;
    transition: right 0.3s ease;

    &:hover {
        background-color: #3498db;
    }
`;

// Main component for the Meditation app
export const Meditation = () => {
    // State hooks for managing time, words, sidebar status, text visibility, and current phase
    const [time, setTime] = useState(initialTime);
    const [words, setWords] = useState(initialWords);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [textDisplay, setTextDisplay] = useState(true);
    const [currentPhase, setCurrentPhase] = useState(0);

    // Use effect to load settings from local storage and start the breathing cycle
    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        if (savedSettings) {
            setWords(savedSettings.words);
            setTime(savedSettings.time);
        }
        const interval = setTimeout(breathe, initialTime);
        return () => clearTimeout(interval);
    }, []);

    // Function to handle the breathing phases
    const breathe = () => {
        setCurrentPhase(0);
        setTimeout(() => {
            setCurrentPhase(1);
            setTimeout(() => {
                setCurrentPhase(2);
                setTimeout(() => {
                    setCurrentPhase(3);
                    setTimeout(breathe, time[3] * 1000);
                }, time[2] * 1000);
            }, time[1] * 1000);
        }, time[0] * 1000);
    };

    // Function to toggle the visibility of the text
    const toggleText = () => {
        setTextDisplay(prev => !prev);
    };

    // Function to toggle the sidebar open/closed
    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    // Function to save the updated settings to local storage
    const saveSettings = () => {
        const textNodes = document.querySelectorAll("input[type='text']");
        const numberNodes = document.querySelectorAll("input[type='number']");
        const newWords = Array.from(textNodes).map(node => node.value);
        const newTime = Array.from(numberNodes).map(node => {
            let value = parseInt(node.value);
            // Validate time values
            if (value <= 0 && newTime.indexOf(node) % 2 === 1) value = 0;
            if (value < 2 && newTime.indexOf(node) % 2 === 0) value = 2;
            if (value > 10) value = 10;
            return value;
        });
        setWords(newWords);
        setTime(newTime);
        localStorage.setItem('settings', JSON.stringify({ words: newWords, time: newTime }));
        toggleSidebar();
    };

    // Function to reset settings to initial values
    const resetSettings = () => {
        setWords(initialWords);
        setTime(initialTime);
        localStorage.setItem('settings', JSON.stringify({ words: initialWords, time: initialTime }));
        toggleSidebar();
    };

    return (
        <Container >
            <>
           <Link to="../../home"><img src={logo1} alt="" class="logo1"/> </Link> 
            <MainView className={sidebarOpen ? 'sidebar-open' : ''}>
                <CircleStyled time={time[currentPhase]} scale={currentPhase === 2 ? 0.25 : 1} />
                <OrbitContainer>
                    <OrbitingCircle />
                </OrbitContainer>
                <TextStyled textDisplay={textDisplay} onClick={toggleText}>
                    {words[currentPhase]}
                </TextStyled>
            </MainView>
            <SidebarStyled sidebarOpen={sidebarOpen}>
                <h2>Settings</h2>
                {words.map((word, index) => (
                    <div key={index}>
                        <label>
                            {word}
                            <input type="text" defaultValue={word} />
                            <input type="number" defaultValue={time[index]} />
                        </label>
                    </div>
                ))}
                <button onClick={saveSettings}>Save</button>
                <button onClick={resetSettings}>Reset</button>
            </SidebarStyled>
            <SidebarToggle sidebarOpen={sidebarOpen} onClick={toggleSidebar}>☰</SidebarToggle>
          </>
        </Container>
    );
}

export default Meditation;
