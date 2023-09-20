import React from "react";
import DisplayCards from "./DisplayCards";
import Profile from "./Profile";
import Greet from "./Greet";
import Heading from "./Heading";

function App() {
  return (
    <>
      <Profile />
      <div className="container">
        <Heading />
        <DisplayCards />
        <Greet />
      </div>
    </>
  );
}

export default App;
