import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      Hello World
      <Button
        label="Click Me!"
        onClick={() => {
          console.log("Hi");
        }}
      />
    </div>
  </React.StrictMode>
);
