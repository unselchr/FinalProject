import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
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
      <Container fluid>
        <Row>
          <p>{this.state.test.data}</p>
        </Row>
      </Container>
    )
  }
}




export default Home;
