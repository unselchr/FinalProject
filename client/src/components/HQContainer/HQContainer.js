import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Unit from "../Unit";
import NewUnitModal from "./../AddUnitModal";
import units from "./../../utils/units";
import ReactModal from "react-modal";
class HQContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: props.units,
      min: props.min,
      max: props.max,
      showNewModal: false,
      showEditModal: false
    }
    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
    this.handleOpenNew = this.handleOpenNew.bind(this);
    this.handleCloseNew = this.handleCloseNew.bind(this);
  }

  handleOpenEdit() {
    this.setState({ showEditModal: true });
  }

  handleCloseEdit() {
    this.setState({ showEditModal: false });
  }
  handleOpenNew() {
    this.setState({ showNewModal: true });
  }

  handleCloseNew() {
    this.setState({ showNewModal: false });
  }
  addHQ = function () {
    const options = units.hq;
    console.log(options);
    console.log(this.state);
    return(options);
    
  }
  render() {
    return (
      <div>
        {this.state.units ? (
          <div>
            {this.state.units.map(unit => (
              <Unit name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} clickHandler={this.handleOpenEdit} />
            ))}
          </div>
        ) : (null)
        
        }
        <ReactModal isOpen={this.state.showEditModal} contentLabel="Edit unit">
          <button onClick={this.handleCloseEdit}>Save</button>
        </ReactModal>
        <ReactModal isOpen={this.state.showNewModal} contentLabel="New unit">
          <NewUnitModal options={units.hq} clickHandler={this.addHQ}/>
          <button onClick={this.handleCloseNew}>Close</button>
        </ReactModal>
        <div className="card" onClick={this.handleOpenNew}>
          <div className="card-body">
            <h5 className="card-title">Add HQ</h5>
          </div>
        </div>
      </div>
    )
  }
}
export default HQContainer;