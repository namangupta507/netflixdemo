import React, { useState } from "react";
import Forms from "./Forms";
import "./Profile.css";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggleVisibility}>
        <span className="logo_profile">🤵</span>
      </button>
      {isVisible && <Forms />}
    </div>
  );
};

export default Profile;
