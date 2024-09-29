import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './Landing.css'
import Navigation from './components/landing/Navigation';
import Footer from './components/landing/Footer';
import MainContent from './components/landing/MainContent'
import Weather from './components/weather/Weather';
import Geolocation from './components/geolocation/Geolocation';
import Gallery from './components/gallery/Gallery';
import BgVideo from './img/landing-bg-video.mp4';

function Landing() {
  return (
    <Router>
      <video id='landing-bg-video' autoPlay loop muted src={BgVideo} type="video/mp4"></video>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/geolocation" element={<Geolocation/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default Landing
