import React from "react";

const Weather = ({ weatherObject }) => {
  return (
    <div>
      <p>
        <strong>temperature: </strong>
        {weatherObject.current.temperature} Celsius
      </p>
      <img
        src={weatherObject.current.weather_icons[0]}
        alt={
          weatherObject.current.descriptions +
          ` in ${weatherObject.location.name}`
        }
      />
      <p>
        <strong>wind: </strong>
        {weatherObject.current.wind_speed} mph direction{" "}
        {weatherObject.current.wind_dir}
      </p>
    </div>
  );
};
export default Weather;
