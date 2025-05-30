// Desc: Main App component
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Profile from './Pages/new'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            {/* <Route path="/profile" element={<Profile />}></Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
