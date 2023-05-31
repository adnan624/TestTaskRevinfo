import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import FirstPage from "./components/firstPage";
import Error from "./components/error";
import Home from "./components/home";
import Otp from "./components/otp";
import Api from "./components/api";
//
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<Error />} />
          <Route path="/home" element={<Home />} />
        <Route path="/otp" element={ <Otp/> } />
        <Route path="/api" element={<Api />} />
        </Routes>
      </Router>
    </div>
  );
}

