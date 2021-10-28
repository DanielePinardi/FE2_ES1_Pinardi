import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Message = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter some letters"
        onChange={(e) => {
          const val = e.target.value;
          setMessage((prev) => prev + val);
        }}
      />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);
