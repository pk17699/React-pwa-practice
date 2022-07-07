import React from 'react';
import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Login from './Components/Login/login';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 style={{color:'green'}}>You are viewing Online page!</h1>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
