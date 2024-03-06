import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      console.log('Registration submitted:', formData);
      navigate('/admin');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      console.log('Login submitted:', formData);
      navigate('/admin');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Auth</h2>
      <div className="form-container">
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;