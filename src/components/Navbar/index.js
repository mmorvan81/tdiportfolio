import React from "react";
import"./style.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
        id="text-white"
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
{/*       <li className="nav-item text-white">
        <a
          id="text-white"
          href="#signin"
          onClick={() => props.handlePageChange("Signin")}
          className={props.currentPage === "Signin" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </a>
      </li>
      <li className="nav-item">
        <a
          id="text-white"
          href="#signout"
          onClick={() => props.handlePageChange("Signup")}
          className={props.currentPage === "Signup" ? "nav-link active" : "nav-link"}
        >
          Sign Up
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
