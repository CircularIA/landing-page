/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Welcome from './cuestionario/Welcome'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/cuestionario" element={<Welcome/>} />
        {/* Aquí puedes agregar otras rutas si las necesitas */}
      </Routes>
    </Router>
  );
}

export default App;
