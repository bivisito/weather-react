import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4 date">
          <ul>
            <li className="city">{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} />
              <span>{props.data.time}</span>
              <span className="description">{props.data.description}</span>
            </li>
          </ul>
        </div>
        <div className="col-3 ppt">
          <ul>
            <li>
              <WeatherTemp celsius={props.data.temperature} />
            </li>
            <li className="humidityWind">
              <span>Humidity: {Math.round(props.data.humidity)}%</span>
              <br />
              <span>Wind: {Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-2 emoji">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={76} />
          </div>
        </div>
      </div>
    </div>
  );
}
