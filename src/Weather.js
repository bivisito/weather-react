import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        </form>
        <br />
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
