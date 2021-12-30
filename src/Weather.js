import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    date: "Monday, Sept. 6",
    time: "13:08 pm",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 22,
    wind: 2,
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-2 emoji">
          <ul>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
              />
            </li>
            <li className="description">Sunny</li>
          </ul>
        </div>
        <div className="col-3 ppt">
          <ul>
            <li>
              <span className="temp">21</span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>
                | <a href="/">°F</a>
              </span>
            </li>
            <li className="humidityWind">
              <span>Humidity: 22%</span>
              <br />
              <span>Wind: 4 km/h</span>
            </li>
          </ul>
        </div>

        <div className="col-4 date">
          <ul>
            <li className="city">Toronto</li>
            <li>Monday, Dec. 8</li>
            <li>14:06</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
}
