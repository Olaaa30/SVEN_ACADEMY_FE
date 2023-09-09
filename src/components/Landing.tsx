// import {useStatee} from "react";
import Navbar from "./Navbar";
import "../styles/Landing.css";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <body>
        <div className="container">
          <h1 className="header">
            Welcome to SVEN Academy,the ultimate goal for organisations
          </h1>
          <p className="subheading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            eius? Sapiente accusantium voluptatibus ipsum quos libero, at
            obcaecati odit tempora iste aperiam commodi tenetur. Consequuntur a
            veritatis repellendus voluptatem quas.
          </p>
        </div>
      </body>
    </div>
  );
};

export default Landing;
