import React, { useEffect } from "react";
import CountryInformation from "./CountryInformation";
import Filter from "./Filter";

const Country = ({ countries, dataObject }) => {
  const callWeatherEffect = () => {
    if (countries.length === 1) {
      dataObject.setFindWeather(countries[0].name);
    }
  };

  useEffect(callWeatherEffect, [dataObject.findWeather]);

  if (countries.length === 1) {
    const country = countries[0];

    return (
      <div>
        <Filter
          search={dataObject.search}
          handleSearchChange={dataObject.handleSearchChange}
        />
        <CountryInformation
          key={country.name}
          country={country}
          weatherObject={dataObject.weather}
        />
      </div>
    );
  }

  if (countries.length < 10) {
    return (
      <div>
        <Filter
          search={dataObject.search}
          handleSearchChange={dataObject.handleSearchChange}
        />
        {countries.map((country) => (
          <div key={country.name}>
            <p>{country.name} </p>
            <button onClick={() => dataObject.findCountry(country.name)}>
              show
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Filter
        search={dataObject.search}
        handleSearchChange={dataObject.handleSearchChange}
      />
      <p>Too many matches, specify another filter</p>
    </div>
  );
};

export default Country;
