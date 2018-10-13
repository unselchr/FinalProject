import React from "react";
import "./Jumbotron.css"
// import { Container } from "constants";

const Jumbotron = ({ children }) => (
  <div className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
