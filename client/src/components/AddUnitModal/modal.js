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
    //console.log(this.props);
  }
  render(){
    return(
      <div>
        {this.state.options?(
          <div>
            {this.state.options.map((unit,index) => (
              <Unit key={index} name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} clickHandler={this.props.clickHandler}next={this.props.next}/>
            ))}
          </div>
        ):(null)}
      </div>
    )
  }
}
export default modal;