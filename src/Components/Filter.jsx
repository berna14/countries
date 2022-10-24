import React from "react";

const Filter = ({ filteredCountries, filter, setFilter }) => {
  if (filter) {
    if (filteredCountries.length > 10) {
      return "Too many countries.";
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name}</h1>
          <div>
            <p>Capital: {filteredCountries[0].capital}</p>
            <p>Copulation: {filteredCountries[0].population}</p>
          </div>
          <div>
            <h2>Languages</h2>
            <div>
              {filteredCountries[0].languages.map((language) => {
                return <li>{language.name}</li>;
              })}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Filter;
