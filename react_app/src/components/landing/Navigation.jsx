import { useNavigate } from 'react-router-dom';
import "./navigation.css";

function Navigation() {

    const navigate = useNavigate();

    return (
      <nav id="navigation">
        <div id="navigation-links-container">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/weather')}>Weather</button>
          <button onClick={() => navigate('/geolocation')}>Geolocation</button>
          <button>Gallery</button>
        </div>
      </nav>
    );
  }
  
  export default Navigation;