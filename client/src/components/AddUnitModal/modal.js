import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Unit from "./../Unit";
class modal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:props.options
    }
  }
  render(){
    return(
      <div>
        {this.state.options?(
          <div>
            {this.state.options.map(unit => (
              <Unit name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} clickHandler={this.props.clickHandler}/>
            ))}
          </div>
        ):(null)}
      </div>
    )
  }
}
export default modal;