import React, { useState } from "react";
import { Link,  } from "react-router-dom";
// import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();

  // const handleRegister = async () => {
  //   try {
  //     let result = await axios.postpost(
  //       "http://localhost:3000/users/register",
  //       form
  //     );

  //     navigate("/login");
  //   } catch (error) {}
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <form>
            <img
              src={
                "https://logos-world.net/wp-content/uploads/2021/03/Trello-Logo.png"
              }
              alt=""
              className="logo mb-4"
            />
            <h5 className="mb-3">Sign up to continue</h5>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mb-4"
            >
              Continue
            </button>
            <h3 className="mb-3">OR</h3>
            <button className="btn btn-light w-100 google-button">
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                }
                alt="Google Logo"
                className="google-logo"
              />
              <span className="google-button-text">Continue with Google</span>
            </button>
            <p className="mt-4">
              Do you already have an account?
              <Link to="/login" className="account">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
