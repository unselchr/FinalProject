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
    return(
      <Container fluid>
          <p>{this.state.test}</p>
          <img src="https://www.games-workshop.com/resources/touts/2018-03-03/40K//40K_MultiCol_Newto40K_180303.jpg" alt="Smiley" style={{height:300, width:200}}/>
      </Container>
    )
  }
}

export default Home;
