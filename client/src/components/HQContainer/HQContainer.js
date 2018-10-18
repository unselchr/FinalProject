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
      showEditModal: false,
      selectedId:-1
    }
    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
    this.handleOpenNew = this.handleOpenNew.bind(this);
    this.handleCloseNew = this.handleCloseNew.bind(this);
    this.addHQNext=this.addHQNext.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange=(event)=>{
    let value = event.target.value;
    const name = event.target.name;
    const unitId = event.target.id;
    console.log(value,name,unitId);
    let unit=this.state.units[unitId];
    console.log(unit);
    //console.log(event);
    //console.log(this);
  }
  handleOpenEdit() {
    this.setState({ showEditModal: true,selectedId:0 });
    //console.log(this);
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
    //const options = units.hq;
    //console.log(options);
    //console.log(this.state);
    //console.log(this.props);
    this.state.next(this.state);
    return(this.state);
    
  }
  addHQNext=function(newUnit){
    //console.log("!!!!!!!!!!!!")
    //console.log(newUnit);
    //console.log(this.state);
    if(!this.state.units){
      this.setState({ units: [newUnit] });
      //console.log("making units for first time?");
    }
    else{
      //console.log(newUnit);
      let units=this.state.units;
      //console.log(units);
      let newUnits=units.push(newUnit);
      console.log(newUnits);
      //this.setState({ units:newUnits},()=>{console.log(this.state.units)});
    }
    this.handleCloseNew();
  }
  render() {
    return (
      <div>
        {this.state.units ? (
          <div>
            {this.state.units.map((unit,index) => (
              <Unit id={index} key={index} name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} clickHandler={this.handleOpenEdit.bind(index)} next={this.addHQNext}/>
            ))}
          </div>
        ) : (null)
        
        }
        <ReactModal ariaHideApp={false} onRequestClose={this.handleCloseEdit} isOpen={this.state.showEditModal} contentLabel="Edit unit">
          <form>
            <input id={this.state.selectedId} value={this.state.points} name="points" type="number" onChange={this.handleChange}/>
          </form>
          <button onClick={this.handleCloseEdit}>Save</button>
        </ReactModal>
        <ReactModal ariaHideApp={false} onRequestClose={this.handleCloseNew} isOpen={this.state.showNewModal} contentLabel="New unit">
          <NewUnitModal options={units.hq} next={this.addHQNext} clickHandler={this.addHQ}/>
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