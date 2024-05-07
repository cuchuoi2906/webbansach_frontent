import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layout/header/Navbar';
import Footer from './layout/footer/Footer';
import HomePage from './layout/homepage/HomPage';

function App() {
  const [tuKhoaTimKiem,setTuKhoaTimKiem] = useState("");
  return (
    <div className="App">
      <Navbar setTuKhoaTimKiem={setTuKhoaTimKiem} />
      <HomePage  tuKhoaTimKiem={tuKhoaTimKiem} />
      <Footer />
    </div>
  );
}

export default App;
