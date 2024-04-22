import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layout/header/Navbar';
import Footer from './layout/footer/Footer';
import HomePage from './layout/homepage/HomPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
