import './footer.css';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import email from '../../img/email.png';

function Footer() {
    return (
        <footer id='footer'>
            <p>© Example</p>
            <img className='logo' src={github} alt="github-logo" />
            <img className='logo' src={instagram} alt="instagram-logo" />
            <img className='logo' src={email} alt="email-logo" />
        </footer>
    )
}

export default Footer;