import { useState } from 'react';
import './weather.css'

function Weather() {
    const [weather, setWeather] = useState({
        temperature: "22°C",
        condition: "Sunny"
    });

    return (
        <div id='weather-container'>
            <h1>Weather today</h1>
            <p>Temperature: {weather.temperature}</p>
            <p>Condition: {weather.condition}</p>
        </div>
    );
};

export default Weather;