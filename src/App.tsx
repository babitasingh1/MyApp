import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./components/ListItems";
import AddItems from "./components/AddItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>New React App</h1>
        <Route path="/" exact component={ListItems} />
        <Route path="/Add" exact component={AddItems} />
      </header>
    </div>
  );
}

export default App;
