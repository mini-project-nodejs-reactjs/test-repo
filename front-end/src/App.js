import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkToken, checkUserInfo } from './store/actions';

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import BoardList from "./pages/BoardList";
import TodoList from "./pages/TodoList";

const routes = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/boards',
    element: <BoardList />
  },
  {
    path: '/boards/:id',
    element: <TodoList />
  }
]

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkToken())
    dispatch(checkUserInfo())
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {routes.map((route, index) => {
              return <Route key={index} {...route} />
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
