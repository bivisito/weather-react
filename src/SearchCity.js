import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";

export default function SearchCity() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
    });
  }

  if (weatherData.ready) {
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
        <div className="row">
          <div className="col-2 emoji">
            <ul>
              <li>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </li>
              <li className="description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-3 ppt">
            <ul>
              <li>
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>
                  | <a href="/">°F</a>
                </span>
              </li>
              <li className="humidityWind">
                <span>Humidity: {Math.round(weatherData.humidity)}%</span>
                <br />
                <span>Wind: {Math.round(weatherData.wind)} km/h</span>
              </li>
            </ul>
          </div>

          <div className="col-4 date">
            <ul>
              <li className="city">{weatherData.city}</li>
              <li>
                <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li>{weatherData.time}</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let city = "Toronto";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
