import React from "react";

import "./Button.css";

const Button = ({ label = "Submit", onClick, ...props }) => {
  return (
    <div>
      <button className="test-library-button" onClick={onClick} {...props}>
        {label}
      </button>
    </div>
  );
};

export default Button;
