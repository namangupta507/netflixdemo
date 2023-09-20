import React, { useState } from "react";
import "./Greet.css";

const Greet = () => {
  const [message, setMessage] = useState("Hi Thank You For Visiting!");
  const showMessage = () => {
    setMessage(message);
    alert(message);
  };
  return (
    <button className="greet_button" onClick={showMessage}>
      Click Me
    </button>
  );
};

export default Greet;
