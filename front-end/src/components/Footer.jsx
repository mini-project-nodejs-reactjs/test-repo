import logotrello from '../assets/logotrello.PNG'

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="container">
        <div className="upper-section">
          <img src={logotrello} alt="" className='footer-logo' />
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

        </div>
      </div>
    </div>
  )
}
 
export default Footer