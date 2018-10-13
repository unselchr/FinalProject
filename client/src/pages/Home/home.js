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
      <Container>
        <p>Container</p>
        <Col style={{justifyContent: "center"}}>
        <div></div>
        </Col>
      </Container>
    )
  }
}

export default Home;
