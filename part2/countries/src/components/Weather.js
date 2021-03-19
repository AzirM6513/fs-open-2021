import React from "react";

const Weather = ({ weatherObject }) => {
  console.log(weatherObject);
  return (
    <div>
      <p>
        <strong>temperature: </strong>
        {weatherObject.temperature} Celsius
      </p>
      <img
        src={weatherObject.weather_icons}
        alt={weatherObject.descriptions + ` in ${weatherObject.name}`}
      />
      <p>
        <strong>wind: </strong>
        {weatherObject.wind_speed} mph direction {weatherObject.wind_dir}
      </p>
    </div>
  );
};
export default Weather;
