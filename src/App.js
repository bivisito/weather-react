import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="Toronto" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
