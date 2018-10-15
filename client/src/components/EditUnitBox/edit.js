import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./edit.css";

class Unit extends React.Component {

  render(){
    return(
      <div className="modal" id="editModal" tabIndex="-1"role="dialog"aria-hidden="true">

      </div>
    )
  }
}