import React from "react";
import "./Col.css";

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
    <div>
      <div class="row"> 
        <div class="column" id="column1">Column</div>
        <div class="column" id="column2">Column</div>
        <div class="column" id="column3">Column</div>
      </div>
    </div>  
  </div>
);

export default Col;