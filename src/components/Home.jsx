import React from "react";
import { Header } from "../header/Header";
import "./home.css"


export const Home = () => {
  return (
    <div id="homePage">
      <Header />
      <div id="home-head" class="w3-container w3-center w3-animate-bottom">
        {window.sessionStorage.getItem("name") ? (
          <h1>Hello {window.sessionStorage.getItem("name")}</h1>
          ) : (
          <h1>Good Day</h1>
        )}
      </div>
    </div>
  );
};
