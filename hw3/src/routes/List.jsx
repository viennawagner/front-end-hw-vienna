import React from "react";
import "../style.css";

//Card containing country info
const Card = (country) => {
  //Generic not found response for if the API is missing any data
  const not_found = "Data not found";
  return(
    <div class="card">
      <h1 class="card-header"> {country.name} </h1>
      <img src={country.flag_png} alt={country.flag_alt || "No alternative text provided"} />
      <p><strong>Official Language(s): </strong>{country.official_languages.join(", ") || not_found}</p>
      <p><strong>Population: </strong>{country.population.toLocaleString() || not_found}</p>
      <p><strong>GDP (Billions): </strong>{country.gdp_billions || not_found}</p>
    </div>
  );
}

//All country cards
const Countries = (countries) => {
  return (
    countries.map((country) => {
        <>
        <Card key={country.id} country={country} />
        </>
    })
  );
}



//The list page
export default function List() {
  
  //Get the data from the API
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';
  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url);
      const countries = await response.json();
      setData(countries);
    }
    getData(url);
  }, []);

  return(
    <div className="bg">
      <div className="page">
        <Countries countries={data} />
      </div>
    </div>
  );
}