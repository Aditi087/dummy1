import React from "react";
import { Todo } from "../components/Todo";
import { Header } from "../header/Header";
import "./dash.css"

export const Dash = () => {
  return (
    <div id="dash">
      <Header />
      <h3 id="d-head">Dashboard</h3>
      <div id="d-info">
        <h6>Name: {sessionStorage.getItem("name")}</h6>
        <h6>Email: {sessionStorage.getItem("email")}</h6>
      </div>
      <Todo/>
    </div>
  );
};
