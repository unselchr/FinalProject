import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Unit from "../Unit";
import NewUnitModal from "./../AddUnitModal";
import units from "./../../utils/units";
import ReactModal from "react-modal";
import { updateLocale } from "moment";
class HQContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: props.units,
      min: props.min,
      max: props.max,
      showNewModal: false,
      showEditModal: false,
      selectedId: -1,
      totalPoints: 0,
      totalPL: 0,
      returnNums:this.props.returnNums
    }
    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
    this.handleOpenNew = this.handleOpenNew.bind(this);
    this.handleCloseNew = this.handleCloseNew.bind(this);
    this.addHQNext = this.addHQNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateNums = this.updateNums.bind(this);
  }
  handleChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    const unitId = event.target.id;
    console.log(value, name, unitId);
    let unit = this.state.units[unitId];
    console.log(unit);
    console.log(this);
    const units = this.state.units;
    units[unitId].points = value;
    this.setState({
      units
    })
    this.updateNums();
    // unit.points=value;
    // this.forceUpdate();
    //console.log(event);
    //console.log(this);
  }
  handleOpenEdit(id) {
    this.setState({ showEditModal: true, selectedId: id });
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
    return (this.state);

  }
  updateNums() {
    if (this.state.units) {
      if (this.state.units.length) {
        let pl = 0;
        let pt = 0;
        for (let i = 0; i < this.state.units.length; i++) {
          pl += parseInt(this.state.units[i].powerLevel);
          pt += parseInt(this.state.units[i].points);
        }
        this.setState({ totalPoints: pt, totalPL: pl });
        this.state.returnNums({category:"hq",points:pt,powerLevel:pl});
      }
      else {
        this.setState({ totalPoints: this.state.units.points, totalPL: this.state.units.powerLevel });
        this.state.returnNums({ category: "hq", points: this.state.units.points, powerLevel: this.state.units.powerLevel });
      }
    }
    //this.state.returnNums({points:this.state.totalPoints,powerLevel:this.state.totalPL,category:"hq"});
  }
  addHQNext = function (newUnit) {
    //console.log("!!!!!!!!!!!!")
    //console.log(newUnit);
    //console.log(this.state);
    if (!this.state.units) {
      this.setState({ units: [newUnit] });
      //console.log("making units for first time?");
    }
    else {
      //console.log(newUnit);
      let units = this.state.units;
      //console.log(units);
      units.push(newUnit);
      this.setState(units);
      //console.log(newUnits);
      //this.setState({ units:newUnits},()=>{console.log(this.state.units)});
    }
    this.updateNums();
    this.handleCloseNew();
  }
  render() {
    return (
      <div>
        {this.state.units ? (
          <div className="card-deck mx-auto">
            {this.state.units.map((unit, index) => (
              <Unit id={index} key={index} name={unit.name} points={unit.points} powerLevel={unit.powerLevel} img={unit.img} clickHandler={this.handleOpenEdit.bind(index)} next={this.addHQNext} />
            ))}
          </div>
        ) : (null)

        }
        <ReactModal ariaHideApp={false} onRequestClose={this.handleCloseEdit} isOpen={this.state.showEditModal} contentLabel="Edit unit">
          <form>
            <input id={this.state.selectedId} value={this.state.points} name="points" type="number" onChange={this.handleChange} />
          </form>
          <button onClick={this.handleCloseEdit}>Save</button>
        </ReactModal>
        <ReactModal ariaHideApp={false} onRequestClose={this.handleCloseNew} isOpen={this.state.showNewModal} contentLabel="New unit">
          <NewUnitModal options={units.hq} next={this.addHQNext} clickHandler={this.addHQ} />
          <button onClick={this.handleCloseNew}>Close</button>
        </ReactModal>
        <div className="card" onClick={this.handleOpenNew}>
          <div className="card-body">
            <button>
              <h5 className="card-title">&#43;HQ</h5>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default HQContainer;