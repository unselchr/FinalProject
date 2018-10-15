import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Unit from "../Unit";
class HQContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: props.units,
      min: props.min,
      max: props.max
    }
  }
  render() {
    return (
      <div>
        {this.state.units?(
          <div>
            {this.state.units.map(unit => (
              <Unit name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} handleEdit={this.handleEdit} />
            ))}
          </div>
        ):(null)
      }
        
        <div className="card" onClick={this.props.addHQ}>
          <div className="card-body">
            <h5 className="card-title">Add HQ</h5>
          </div>
        </div>
      </div>
    )
  }
}
export default HQContainer;