import React, { useState, useEffect } from "react";
import Country from "./components/Country";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState({});
  const [findWeather, setFindWeather] = useState("new%20york");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${findWeather}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [findWeather]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const findCountry = (country) => {
    setSearch(country);
  };

  const dataObject = {
    search,
    handleSearchChange,
    weather,
    setFindWeather,
    findCountry,
  };

  return (
    <>
      <Country countries={filteredCountries} dataObject={dataObject} />
    </>
  );
}

export default App;
