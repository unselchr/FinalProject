import React from "react";
import LoginForm from 'grommet/components/LoginForm';

export const Input = props => (
  // <div className="form-group">
  //   <input className="form-control" {...props} />
  // </div>
  <LoginForm onSubmit={...props} />
);
