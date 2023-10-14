import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Register = () => {
  const accessToken = useSelector((store) => store.userReducer.accessToken);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users/register", form);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/boards");
    }
  }, [accessToken, navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <div className="left-image">
            <img
              src="https://img.freepik.com/free-vector/tiny-people-developers-laptop-customer-requirements-software-requirement-description-user-case-agile-tool-business-analysis-concept-bright-vibrant-violet-isolated-illustration_335657-1012.jpg?size=626&ext=jpg&ga=GA1.2.341454807.1671117297&semt=ais"
              alt=""
              className="image"
            />
          </div>
          <form onSubmit={(e) => handleRegister(e)}>
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
            <button type="submit" className="btn btn-primary w-100 mb-4">
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
              Do you already have an account?{" "}
              <Link to="/login" className="account">
                Log In
              </Link>
            </p>
          </form>
          <div className="right-image">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-business-planning-illustration_23-2149164340.jpg?size=626&ext=jpg&ga=GA1.1.341454807.1671117297&semt=ais"
              alt=""
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
