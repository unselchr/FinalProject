import React, { Component } from "react";
import "./Form.css";
var axios=require("axios");
class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.firstName || !this.state.lastName) {
    //   alert("Fill out your first and last name please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.firstName} ${this.state
    //       .lastName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.email} ${this.state.lastName}`);
    // }
    //if(this.state.password===this.state.confirmPassword){
          /////////////////////////////////AXIOS REQUEST TO EXpress server
      console.log("aye lmao");
      axios.post("/signin",{
        "email":this.state.email,
        "password":this.state.password
      })
        .then(response=>window.location.href="/"+response)
        .catch(err=>console.log(err));
    //}
    //else{
      //alert("Passwords must match!");
    //}
    /////////////////////////////////AXIOS REQUEST TO EXpress server
    // this.setState({
    //   email: "",
    //   password: "",
    //   confirmPassword: ""
    // });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>

        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email@domain.com"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
