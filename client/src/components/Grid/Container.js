import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid}`}>
    {children}
  </div>
);

export default Container;