import React from "react";
import "../style.css";
import { Bar } from "react-chartjs-2";

export default function Population() {
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

  const pops = data.map((country) => { return country.population });

  return (
    <div className="bg">
      <div className="page">
        <Bar data={pops} />
      </div>
    </div>
  )
}