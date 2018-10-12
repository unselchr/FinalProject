import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
    <div class="w3-container"> 
      <h2>With a Container</h2>
        <p>The w3-container class is one of the most important W3.CSS classes.</p>
        <p>It provides correct margins, padding, alignments, and more, to most HTML elements.</p>
    </div>
  </div>
);
