import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../store/actions";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  const logOut = () => {
    dispatch(removeToken());
    navigate("/");
  };

  let navButton;
  if (accessToken) {
    // navButton = <div className="button-link" onClick={() => logOut()}>Log Out</div>
    navButton = (
      <NavDropdown
        id="nav-dropdown-dark"
        title={userInfo.email}
        menuVariant="dark"
      >
        <NavDropdown.Item onClick={() => logOut()}>Log Out</NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    const path = window.location.pathname;
    let buttonText = path === "/login" ? "Register" : "Log In";

    navButton = (
      <Link to={path === "/login" ? "/register" : "/login"}>
        <div className="button-link">{buttonText}</div>
      </Link>
    );
  }

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
      <div className="right">{navButton}</div>
    </div>
  );
};

export default Navbar;
