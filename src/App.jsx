import './App.css';
import React from 'react';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;