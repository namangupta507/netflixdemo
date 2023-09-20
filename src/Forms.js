import React, { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    mail: "",
    pNumber: "",
  });
  const inputData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFullName((prevValue) => {
     return {
      ...prevValue,
      [name]:value
     }
    });
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Successfully");
  };
  return (
    <>
      <form className="form_one" onSubmit={dataSubmit}>
        <h1 className="text-white">
          {fullName.fName} {fullName.lName}
        </h1>
        <p className="text-white">
          {fullName.mail} {fullName.pNumber}
        </p>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={inputData}
          name="fName"
          value={fullName.fName}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={inputData}
          name="lName"
          value={fullName.lName}
        ></input>
        <br />
        <input
          type="email"
          placeholder="Enter Your email"
          onChange={inputData}
          name="mail"
          value={fullName.mail}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter Your number"
          onChange={inputData}
          name="pNumber"
          value={fullName.pNumber}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Forms;
