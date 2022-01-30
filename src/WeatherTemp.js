import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temp">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
