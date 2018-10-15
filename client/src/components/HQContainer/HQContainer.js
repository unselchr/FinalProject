import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Unit from "../Unit";
class HQContainer extends React.Component {
  constructor(props){
    super(props);
    state={
      units:props.units
    }
  }
  render(){
    return(
      <div>
      {this.state.units.map(unit=>(
        <Unit name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} handleEdit={this.handleEdit}/>
      ))}
      </div>
    )
  }
}
export default HQContainer;