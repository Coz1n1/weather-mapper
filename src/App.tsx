import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { WeatherApp } from "./pages/application/WeatherApp";

function App() {
  return (
    <div className="m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weatherapp" element={<WeatherApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
