import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Nav.css";

const Nav = () => (
  <nav id="Navbar1" class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/Home">WH40K</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/Home" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Rosters
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/NewRoster">New Roster</a>
          <a class="dropdown-item" href="/SavedRosters">Saved Rosters</a>
        </div>
      </li>
      <img id= "NavLogo" href="/Home" src="http://www.sourcecomicsandgames.com/wp-content/uploads/2018/04/warhammer-40k-logo.png" alt="WH40K Logo"/>
    </ul>
  </div>
</nav>
);

export default Nav;
