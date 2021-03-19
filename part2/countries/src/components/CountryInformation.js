import React from "react";
import Language from "./Language";
import Weather from "./Weather";

const CountryInformation = ({ country, weatherObject }) => (
  <>
    <h2>{country.name}</h2>

    <p>capital {country.capital}</p>
    <p>population {country.population}</p>

    <Language languages={country.languages} id={country.name + country.code} />

    <img
      src={country.flag}
      alt={`${country.name}'s flag`}
      width="300"
      height="150"
    />

    <h3>Weather in {country.capital}</h3>
    <Weather weatherObject={weatherObject} />
  </>
);

export default CountryInformation;
