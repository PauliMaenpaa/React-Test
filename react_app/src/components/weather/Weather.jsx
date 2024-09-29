import { useState, useEffect } from 'react';
import './weather.css'

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
            const lon = 24.9236026;
            const lat = 60.1867356;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data.");
                }
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    // if (loading) return <p id='loading'>Loading weather data...</p>;
    // if (error) return <p id='error' >Error fetching weather data: {error}</p>;

    return (
        <div id='weather-container'>
            {weatherData && (
                <div id='weather-info-container'>
                    <h1>Weather in {weatherData.name} </h1>
                    <p>Temperature: {weatherData.main.temp}°C </p>
                    <p>Feels like: {weatherData.main.feels_like}°C </p>
                    <p>Weather: {weatherData.weather[0].description} </p>
                </div>
            )}
        </div>
    );
};

export default Weather;