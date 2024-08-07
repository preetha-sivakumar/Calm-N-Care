import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../../components/assets/person.png';
import email_icon from '../../components/assets/email.png';
import password_icon from '../../components/assets/password.png';
import Navbar from '../../components/Navbar2/Navbar2'
export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [emailId, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate()

  const handleSubmit = async(e) => {
      setError('');
    
    if (action === "Login") {
      try {
        const response = await fetch('http://localhost:5000/users/login-route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailId, password, type:"user" }),
        });

        const result = await response.json();

        if (response.ok) {
          navigate('/CalmNCare-home')
          // Redirect to meditation page
          // history.push('/meditation');
        } else {
          setError(result.message || 'Login failed');
        }
      } catch (err) {
        setError('An error occurred. Please try again later.');
        console.error('Error:', err);
      }
    } else {
      // Handle signup logic here
    }
  };

  return (
    <div className="loginbody">
      <Navbar/>
      <div className='container5'> 
        <div className="header">
          <div className="text1">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="Email Id" 
              value={emailId} 
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder="Password" 
              value={password} 
            />
          </div>
        </div>
        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}
        <div className="submit-container">
          <div 
            className={action === "Login" ? "submit gray" : "submit"} 
            onClick={() => handleSubmit("Sign Up")}
          >
            Sign Up
          </div>
          <div 
            className={action === "Sign Up" ? "submit gray" : "submit"} 
            onClick={() => handleSubmit("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
