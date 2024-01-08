import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import HomePage from './pages/home/index.tsx';
import Employees from './pages/listEmployees/index.tsx';
import CreateEmployee from './pages/createEmployee/index.tsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/create" element={<CreateEmployee />} />
        <Route path="/employee/list" element={<Employees />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
