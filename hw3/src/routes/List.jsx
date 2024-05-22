import React from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import "../style.css";

//Card containing country info
const Card = (country) => {
  //Generic not found response for if the API is missing any data
  const not_found = "Data not found";
  console.log(country);
  return(
    <div class="card">
      <h1 class="card-header"> {country['name']} </h1>
      <img src={country['flag_png']} alt={country['flag_alt'] || "No alternative text provided"} />
      <p><strong>Official Language(s): </strong>{country['official_languages'].join(", ") || not_found}</p>
      <p><strong>Population: </strong>{country['population'].toLocaleString() || not_found}</p>
      <p><strong>GDP (Billions): </strong>{country['gdp_billions'] || not_found}</p>
    </div>
  );
}

//All country cards
const Countries = (countries) => {
  console.log(countries)
  return (
    countries.map((country) => {
      return(
        <>
        <Card key={country.id} country={country} />
        </>
    )})
  );
}

//Get the data from the API
const getAPIData = (url) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.error('Request failed: ', error);
    });
  });
  console.log(data);
  return data;
}

//The list page
export default function List() {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';
  const data = getAPIData(url);

  return(
    <div className="bg">
      <Navbar />
      <div className="page">
        <Countries countries={data} />
      </div>
    </div>
  );
}