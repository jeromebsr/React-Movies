import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/movie/">
          <li>Movie</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
