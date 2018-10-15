import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
var axios=require("axios");
class Home extends Component{
  state={
    test:""
  };
  componentDidMount(){
    axios.get("/test")
      .then(res=>this.setState({test:res}))
      .catch(err=>console.log(err));
  }
  render(){
    console.log(this.state.test);
    return(
          // <p>{this.state.test.data}</p>
        <div className="columnDiv">
          <div className="welcomeDiv">
            <p>Welcome, Conscript! Sign in or Sign up and build your 40K Roster.</p>
            <a class="welcomeSI" href="/signin">Sign In</a>
            <a class="welcomeSU" href="/signup">Sign Up</a>
          </div>
        </div>
    )
  }
}

export default Home;
