import React from "react";
import "../style.css";

//Body of the page
const Body = () => {
  return (
    <div className="page">
      <h1>Homework 3</h1>
      <p>Use the navigation bar above to see inforrmation about the countries of South America</p>
    </div>
  );
}

//The home page
export default function Home() {
  return (
    <div className="bg">
      <Body />
    </div>
  )
}
