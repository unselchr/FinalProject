import React from "react";
import "./Container.css";

export const Container = ({ fluid, children }) => (
  <div className="col-md-12">
    <p>COLUMN</p>
      <div className="col-md-8">  
        <p>Column</p>
      </div>
  </div>
);

export default Container;