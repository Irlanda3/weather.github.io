import React, { useState } from 'react';
import humidityIcon from '../assets/humidityIcon.png';
import {FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaBolt, FaSnowflake, FaSmog} from 'react-icons/fa';

/**
 * The Forecast component displays weather information for a specific location.
 */
const Forecast = () => {
  // State variables to manage component behavior
  const [responseObj, setResponseObj] = useState({}); // Weather data from the API
  const [city, setCity] = useState(''); // State to store the entered city
  const [loading, setLoading] = useState(false); // Loading indicator
  const [showspinner, setShowspinner] = useState(false); // Spinner display control
  const [showWeatherInfo, setShowWeatherInfo] = useState(false); // Weather info display control
  const [error, setError] = useState(null); // Error message

   /**
   * Renders weather icons based on weather code.
   * @param {string} weatherCode - The weather condition code.
   * @returns {JSX.Element} Weather icon component.
   */
  function renderWeatherIcon(weatherCode) {
    switch (weatherCode) {
      case '01d':
        return <FaSun />;
      case '01n':
        return <FaMoon />;
      case '02d':
        return <FaCloudSun />;
      case '02n':
        return <FaCloudMoon />;
      case '03d':
      case '03n':
        return <FaCloud />;
      case '04d':
      case '04n':
        return <FaCloud />;
      case '09d':
      case '09n':
        return <FaCloudShowersHeavy />;
      case '10d':
      case '10n':
        return <FaCloudRain />;
      case '11d':
      case '11n':
        return <FaBolt />;
      case '13d':
      case '13n':
        return <FaSnowflake />;
      case '50d':
      case '50n':
        return <FaSmog />;
      default:
        return null;
    }
  }
  
  /**
   * Fetches weather data from the OpenWeatherMap API.
   */
  async function getForecast() {
    if (!city && !zipCode) {
      setError('City name or zip code empty');
      setResponseObj({}); // Clear previous data on error
      return;
    }

    setLoading(true); // Start loading
    setShowspinner(true);

    

    let api_key = import.meta.env.VITE_REACT_APP_API_KEY;
    let url;
    try {
      // Retrieve API key from environment variables
      if (city) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`;
      } else {
        // Use zip code if provided
        url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${api_key}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        // Handle API error responses
        setError('Error try again');
        setResponseObj({}); // Clear previous data on error
        setLoading(false); // Stop loading
        setShowspinner(false); // Hide the spinner
        return;
      }

      const result = await response.json();
      setResponseObj(result);
      setError(null); // Clear any previous errors on success

    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching weather data');
      setLoading(false); // Stop loading on error
      setResponseObj({}); // Clear previous data on error
      setShowspinner(false); // Hide the spinner on error
      
    } finally {
      // Delay hiding the spinner for 1 second (1000 milliseconds)
      setTimeout(() => {
        setLoading(false); // Stop loading after the delay
        setShowspinner(false); // Hide the spinner
        setShowWeatherInfo(true); // Show weather info
      }, 1000);
    }
  }

  return (
    <div className='container'>
      <h2>Weather Conditions</h2>
      
      {/* Input field for entering location */}
      <input
        type="text"
        className="location-input"
        placeholder="city or zip code, country code"
        onChange={(e) => {
          setCity(e.target.value);
          setError(null); // Clear any previous errors when the user types
          setResponseObj({}); // Clear previous data when the user starts typing
          setShowWeatherInfo(false); // Hide weather info when the user starts typing
        }}
      />

      {/* Button to fetch and display weather forecast */}
      <button
        className={`forecast-btn ${loading ? 'disabled' : ''}`}
        onClick={getForecast}
        disabled={loading}
      >
        Get Forecast
      </button>

      {/* Display loading spinner during data retrieval */}
      {showspinner ? <div className="spinner"></div> : null}

      {/* Display error message if API request fails */}
      {error && <div className='error'>{error}</div>}

      {/* Conditionally render weather info based on the absence of error */}
      {!error && showWeatherInfo && responseObj.cod !== '404' ? (
        <div className='weather-info'>
          {/* Display temperature */}
          <p>Temperature: {responseObj.main?.temp} °F</p>
          {/* Display humidity */}
          <p>Humidity: {responseObj.main?.humidity} % {' '}<img src={humidityIcon} alt="Humidity Icon" className='humidity-icon' /></p>
          {/* Display cloud cover */}
          <p>Clouds: {responseObj.clouds?.all} %</p>
          {/* Display weather description and icon */}
          <p className='weather-icons'>Weather: {responseObj.weather?.[0]?.description}{' '}{renderWeatherIcon(responseObj.weather?.[0]?.icon)}</p>
          {/* Display location name */}
          <p>Location: {responseObj.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;