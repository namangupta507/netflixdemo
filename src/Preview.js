import React from "react";
import "./Preview.css";

const Preview = (props) => {
  return (
    <img
      className="preview_image"
      src={props.items.imgsrc}
      alt="image_preview"
    />
  );
};

export default Preview;
