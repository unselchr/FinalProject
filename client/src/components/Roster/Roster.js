import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Roster.css";
class Roster extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name||"new roster",
            points:0,
            powerLevel:0
        }
        this.editClickHandler=this.editClickHandler.bind(this);
    }
    //this is passed all the way down to units to handle the edit unit modal behavior
    editClickHandler=function(){

    }
    //
}