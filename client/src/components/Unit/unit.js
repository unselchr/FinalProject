import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./unit.css";

class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name||"No Name Passed In",
      points: this.props.points||-1,
      powerLevel: this.props.powerLevel||-1,
      img: this.props.img||"",
      clickHandler:this.props.clickHandler.bind(this,this.props.id),
      next:this.props.next,
      id:this.props.id
    }
  }
  render() {
    return (
      <div className="card" onClick={this.state.clickHandler}>
        <img className="card-img-top" src={this.state.img} alt="Unit icon not found" />
        <div className="card-body">
          <h5 className="card-title">{this.state.name}   {this.props.id}</h5>
          <p className="card-text">{"Points: " + this.state.points+"   Power Level: "+this.state.powerLevel}</p>
        </div>
      </div>
    )
  }
}
export default Unit; 