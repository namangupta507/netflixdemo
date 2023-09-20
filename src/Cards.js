import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      <img className="image" src={props.items.imgsrc} alt="image1" />
      <div className="part">
        <p className="title">{props.items.title}</p>
        <p className="description">{props.items.desc}</p>
        <a className="vt-btn" href={props.items.link}>
          Watch Now
        </a>
      </div>
    </>
  );
};

export default Cards;
