import React from "react";
import Navbar from "../components/Navbar";
import "../style.css";

const Body = () => {
  return(
    <div className="page">
      <h1> Error 404: Page not found </h1>
      <p> The page you requested was not found </p>
    </div>
  );
}

export default function Error() {
  <div className="bg">
    <Navbar />
    <Body />
  </div>
}