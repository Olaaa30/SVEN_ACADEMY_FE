import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Sven_Academy.png";
import Button from "./Button";
import { DropdownForCourses, DropdownForResources } from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faTimes,
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDownForCourses, setDropDownForCourses] = useState(false);
  const [dropDownForResources, setDropDownForResources] = useState(false);
  const cartIcon: IconProp = faShoppingCart;
  const timesIcon: IconProp = faTimes;
  const bars: IconProp = faBars;
  const caret: IconProp = faCaretDown;

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const onMouseEnterForCourses = () => {
    if (window.innerWidth < 4000) {
      setDropDownForCourses(true);
    } else {
      setDropDownForCourses(false);
    }
  };
  const onMouseLeaveForCourses = () => {
    if (window.innerWidth < 4000) {
      setDropDownForCourses(false);
    } else {
      setDropDownForCourses(false);
    }
  };

  const onMouseEnterForResources = () => {
    if (window.innerWidth < 4000) {
      setDropDownForResources(true);
    } else {
      setDropDownForResources(false);
    }
  };
  const onMouseLeaveForResources = () => {
    if (window.innerWidth < 4000) {
      setDropDownForResources(false);
    } else {
      setDropDownForResources(false);
    }
  };

  return (
    <div>
      <nav>
        {/* <a href=""><img className="logo" src={logo} alt="logo" /></a> */}
        <Link to="/">
          <a href="">
            <img
              className="navbar-logo"
              onClick={closeMobileMenu}
              src={logo}
              alt="logo"
            />
          </a>
        </Link>
        <div className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <ul>
              <li>
                {click ? (
                  <FontAwesomeIcon
                    icon={timesIcon}
                    style={{ color: "#ffffff" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={bars} style={{ color: "#ffffff" }} />
                )}
              </li>
            </ul>
          </div>
          <ul
            id={click ? "nav-menu" : "nav-menu active"}
            className={"nav-menu"}
          >
            <li
              onMouseEnter={onMouseEnterForCourses}
              onMouseLeave={onMouseLeaveForCourses}
              className="nav-item"
            >
              <Link to="/" className="nav-links">
                Courses{" "}
                <FontAwesomeIcon icon={caret} style={{ color: "#ffffff" }} />
              </Link>
              {dropDownForCourses && <DropdownForCourses />}
            </li>
            <li
              onMouseEnter={onMouseEnterForResources}
              onMouseLeave={onMouseLeaveForResources}
              className="nav-item"
            >
              <Link
                to="/resources"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Resources{" "}
                <FontAwesomeIcon icon={caret} style={{ color: "#ffffff" }} />
              </Link>
              {dropDownForResources && <DropdownForResources />}
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon icon={cartIcon} style={{ color: "#ffffff" }} />
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                <Button />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
