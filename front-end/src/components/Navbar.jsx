import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from '../store/actions';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector(state => state.userReducer.accessToken)

  const logOut = () => {
    dispatch(removeToken())
    navigate('/')
  }

  let navButton
  if (accessToken) {
    navButton = <div className="button-link" onClick={() => logOut()}>Log Out</div>
  } else {
    navButton = <Link to="/login">
      <div className="button-link">Log In</div>
    </Link>
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
      <div className="right">
        {navButton}
      </div>
    </div>
  );
};

export default Navbar;
