import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Blue from './pages/blue';
import Red from './pages/red';
import Random from './pages/random';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/blue" element={Blue()} />
        <Route path="/red" element={Red()} />
        <Route path="/random" element={Random()} />
      </Routes>
    </>
  );
}

export default App;
