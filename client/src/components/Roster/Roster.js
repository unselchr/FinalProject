import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Roster.css";
import DivisionContainer from "./../DivisionContainer";
class Roster extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name||"new roster",
            points:0,
            powerLevel:0,
            divisions:this.props.divisions
        }
        this.editClickHandler=this.editClickHandler.bind(this);
    }
    //this is passed all the way down to units to handle the edit unit modal behavior
    editClickHandler=function(){

    }
    //
    render(){
        return(
            <div className="rosterContainer accordion" id="rosterAccordion">
                {this.state.divisions ? (
                    this.state.divisions.map((division,index)=>(
                        <div className="card">
                            <div className="card-header" id={"heading"+index}>
                                <button className="btn collapsed" type="button" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapse"+index}>Laurum Ipsom</button>
                            </div>
                            <div id={"collapse"+index} className="collapse" aria-labelledby={"heading"+index} data-parent="#rosterAccordion">
                                <DivisionContainer className="" id={index} division={division}/>
                            </div>
                        </div>
                    ))
                ):("Click add division to get started")}
            </div>
        )
    }
}