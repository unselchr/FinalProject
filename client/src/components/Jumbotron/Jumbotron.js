import React from "react";
import { Container } from "constants";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, width: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
