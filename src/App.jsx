import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Filter from "./Components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const hook = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  };

  useEffect(hook, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  let filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
      <Filter
        filteredCountries={filteredCountries}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
