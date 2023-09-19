import React from 'react';
import './App.css';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="App">
      <h1 className="weather-title"></h1>
      < Forecast /> {/* Render the WeatherApp component */}
    </div>
  );
}

export default App;

