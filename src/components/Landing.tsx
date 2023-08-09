import React from "react";
import Navbar from "./Navbar";
import '../styles/Landing.css'
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
       <h1 className="header">Welcome to ARM Academy,the ultimate goal for organisations</h1>
      </div>
    </div>
  );
};

export default Landing;
