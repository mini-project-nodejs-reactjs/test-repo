import logotrello from "../assets/logotrello.PNG";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="upper-section">
          <img src={logotrello} alt="" className="footer-logo" />
          <div className="footer-card">
            <h5>About Trello</h5>
            <p>What's behind the boards.</p>
          </div>
          <div className="footer-card">
            <h5>Jobs</h5>
            <p>Learn about open roles on the Trello team.</p>
          </div>
          <div className="footer-card">
            <h5>Apps</h5>
            <p>Download the Trello App for your Desktop or Mobile devices.</p>
          </div>
          <div className="footer-card">
            <h5>Contact Us</h5>
            <p>Need anything? Get in touch and we can help.</p>
          </div>
        </div>
        <div className="lower-section">
          <img src={youtube} alt="Youtube" className="social-logo right" />
          <img src={twitter} alt="Twitter" className="social-logo right" />
          <img src={linkedin} alt="LinkedIn" className="social-logo right" />
          <img src={facebook} alt="Facebook" className="social-logo right" />
          <img src={instagram} alt="Instagram" className="social-logo right" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
