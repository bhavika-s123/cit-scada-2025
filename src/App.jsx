import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/

function App() {
  return (
    <Router>
      <Routes>
        {/* Show Login page without Navbar */}
        <Route path="/login" element={<Login />} />

        {/* Show Dashboard WITH Navbar */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar /> {/* Navbar only appears here */}
              <div className="pt-16"> {/* Pushes content down to avoid overlap */}
                <Dashboard />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
