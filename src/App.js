
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom"
import React from 'react';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

      </Routes>
    </Router>
  
  );
}

export default App;
