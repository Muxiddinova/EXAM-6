import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  useEffect(() => {
    const token = 'https://fakeapi.platzi.com/en/rest/products'; 
    try {
      console.log('Token verified:', token);
    } catch (error) {
      console.error('Token verification error:', error);
    }
  }, []);

  return (
    <div className="container">
      <h2>Admin</h2>
      <div className="form-container">
        <label>
          Input 1:
          <input type="text" name="input1" onChange={handleInputChange} />
        </label>
        <label>
          Input 2:
          <input type="text" name="input2" onChange={handleInputChange} />
        </label>
        <label>
          Input 3:
          <input type="text" name="input3" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleFormSubmit}>Submit Form</button>
      </div>
    </div>
  );
};

export default Admin;