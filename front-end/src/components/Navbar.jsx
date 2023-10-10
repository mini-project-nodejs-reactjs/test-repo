import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="left">
        <img src="https://trello.com/assets/87e1af770a49ce8e84e3.gif" alt="" className="icon-navbar" />
      </div>
      <div className="right">
      <Link to="/">
        <div className="button-link">Log In</div>
      </Link>
      </div>
    </div>
  )
}
 
export default Navbar