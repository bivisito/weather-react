import React from "react";
import "./App.css";
import CityLinks from "./CityLinks";
import SearchCity from "./SearchCity";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <CityLinks />
          <br />
          <SearchCity />
          <br />
          <Weather />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
