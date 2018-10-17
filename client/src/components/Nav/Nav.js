import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Nav.css";
//import API from "./../../utils/API";
//import LoginForm from "./../signIn";
import axios from "axios";
class Nav extends React.Component {
  state = {
    isLoggedIn:null
  }
  componentDidMount() {
    axios.get("/isLoggedIn")
      .then((res) => {
        console.log(res.data); let button;
        if (res.data) {
          button = <a href="/logout">Log Out</a>
        }
        else {
          button = <a href="/signIn">Log In</a>
        }
        this.setState({ isLoggedIn: button });
      })
      .catch(err => console.log(err));
  }
  
  render() {
      return (
        <nav id="Navbar1" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/Home">WH40K</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/Home" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Rosters
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/signup">Sign Up</a>
                  <a className="dropdown-item" href="/signin">Sign In</a>
                  <a className="dropdown-item" href="/newRoster">Create Roster</a>
                  <a className="dropdown-item" href="/savedRosters">Saved Rosters</a>
                </div>
              </li>
            </ul>
              <div className="nav-item">
                  {this.state.isLoggedIn}
              </div>
            <img id="NavLogo" href="/Home" src="http://www.sourcecomicsandgames.com/wp-content/uploads/2018/04/warhammer-40k-logo.png" alt="WH40K Logo" />
          </div>
        </nav>
      );
    }

}
export default Nav;
