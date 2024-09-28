import './Landing.css'
import Navigation from './components/landing/Navigation';
import Footer from './components/landing/Footer';
import MainContent from './components/landing/MainContent'
import BgVideo from './img/landing-bg-video.mp4';

function Landing() {
  return (
    <>
      <video id='landing-bg-video' autoPlay loop muted src={BgVideo} type="video/mp4"></video>
      <Navigation />
      <MainContent />
      <Footer />
    </>
  )
}

export default Landing
