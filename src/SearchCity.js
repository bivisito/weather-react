import React from "react";
import "./App.css";

export default function SearchCity() {
  return (
    <div className="SearchCity">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a City..."
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Current Loc"
            className="form-control btn btn-secondary"
          />
        </div>
      </div>
    </div>
  );
}
