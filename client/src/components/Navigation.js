import React from "react";
import "./stylesheets/Navigation.css";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <button
        className="btn"
        onClick={(e) => {
          props.fetchComic(props.currNum - 1);
        }}
        disabled={props.currNum === 1}
      >
        <i className="fas fa-arrow-left" style={{ marginRight: "5px" }}></i>Back
      </button>
      <button
        className="btn"
        onClick={(e) => {
          props.fetchComic(Math.floor(Math.random() * props.maxNum) + 1);
        }}
      >
        <i className="fas fa-random"></i>
      </button>
      <button
        className="btn"
        onClick={(e) => {
          props.fetchComic(props.currNum + 1);
        }}
        disabled={props.currNum === props.maxNum}
      >
        Next<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i>
      </button>
    </div>
  );
};

export default Navigation;
