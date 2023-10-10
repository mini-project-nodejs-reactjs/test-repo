import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  );
}

export default App;
