import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="_navbar">
      <div className="left">
        <Link to="/">
          <img
            src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
            alt=""
            className="icon-navbar"
          />
        </Link>
      </div>
      <div className="right">
        <Link to="/login">
          <div className="button-link">Log In</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
