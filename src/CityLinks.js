import React from "react";
import "./App.css";

export default function CityLinks() {
  return (
    <div className="CityLinks">
      <div className="row cities">
        <span className="toronto col-2">
          {" "}
          <a href="/">Toronto </a>{" "}
        </span>
        <span className="newYork col-2">
          {" "}
          <a href="/">New York </a>{" "}
        </span>
        <span className="london col-2">
          {" "}
          <a href="/">London </a>{" "}
        </span>
        <span className="paris col-2">
          {" "}
          <a href="/">Paris </a>{" "}
        </span>
        <span className="milan col-2">
          {" "}
          <a href="/">Milan </a>{" "}
        </span>
        <span className="moscow col-2">
          {" "}
          <a href="/">Moscow </a>{" "}
        </span>
      </div>
    </div>
  );
}
