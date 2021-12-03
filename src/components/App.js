import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center background-color-changer">
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
