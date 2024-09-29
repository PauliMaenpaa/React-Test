import './geolocation.css';
import { useState, useEffect } from 'react';

function Geolocation() {
    const [location, setLocation] = useState(null);
    const [error, Seterror] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (err) => {
                    Seterror('Geolocation not supported or permission denied.');
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div id='geolocation-container'>
            <h1>Geolocation</h1>
            {error ? (
                <p>{error}</p>
            ) : location ? (
                <div id='latitude-and-longitude'>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            ) : (
                <p>Fetching location...</p>
            )}
        </div>
    )
};

export default Geolocation;