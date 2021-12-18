import React from "react";
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
        <div className="col-3 emoji1">
          <ul>
            <li>
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </li>
            <li className="description">Sunny</li>
          </ul>
        </div>
        <div className="col-3 ppt">
          <ul>
            <li>
              <span className="temp1">21</span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>
                | <a href="/">°F</a>
              </span>
            </li>
            <li className="humidityWind">
              <span>Humidity: {weatherData.humidity}%</span>
              <br />
              <span>Wind: {weatherData.wind}km/h</span>
            </li>
          </ul>
        </div>

        <div className="col-4 date">
          <ul>
            <li className="city">{weatherData.city}</li>
            <li>{weatherData.date}</li>
            <li>{weatherData.time}</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
}
