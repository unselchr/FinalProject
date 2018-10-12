import React from "react";
import "./Container.css";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
    <div class="row"> 
      <div class="column" id="column1">Column</div>
      <div class="column" id="column2">Column</div>
      <div class="column" id="column3">Column</div>
    </div>
  </div>
);
