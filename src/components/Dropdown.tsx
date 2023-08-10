import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItemsForCourses, MenuItemsForResources } from "./Menuitems";
export const DropdownForCourses = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        className={click ? "dropdown-menu-clicked" : "dropdown-menu"}
        onClick={handleClick}
      >{MenuItemsForCourses.map((item, index) =>{
        return (
            <li key={index}><Link to={item.path} onClick={() => {setClick(click)}} className={item.cName}>{item.title}</Link></li>
        )
      })}</ul>
    </>
  );
};

export const DropdownForResources = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        className={click ? "dropdown-menu-clicked" : "dropdown-menu"}
        onClick={handleClick}
      >
        {MenuItemsForResources.map((item, index) =>{
        return (
            <li key={index}><Link to={item.path} onClick={() => {setClick(click)}} className={item.cName}>{item.title}</Link></li>
        )
      })}
      </ul>
    </>
  );
};
