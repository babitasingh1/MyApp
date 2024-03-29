import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./components/ListItems";
import AddItems from "./components/AddItems";
import ChangeItems from "./components/ChangeItems";
import { isTemplateSpan } from "typescript";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const [items, setItems] = useState(["apple", "mangoes", "banana", "oranges"]);
  const history = useHistory();

  function handleAdd(newitem: any) {
    console.log(newitem);
    //let newItems: any = items.push(newitem);
    setItems([...items, newitem]);
    console.log(items);
    history.push("/");
  }

  function handleDelete(itemtoDelete: any) {
    console.log(itemtoDelete);
    const itemsLeft = items.filter((item) => item !== itemtoDelete);
    console.log(itemsLeft);
    setItems(itemsLeft);
  }

  function handleChange(oldValue: any, newValue: any) {
    items[items.indexOf(oldValue)] = newValue;
    console.log(items);
    history.push("/");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>New React App</h1>
        <Route
          path="/"
          exact
          render={() => <ListItems items={items} onDelete={handleDelete} />}
        />
        <Route
          path="/Add"
          exact
          render={() => <AddItems onAdd={handleAdd} />}
        />

        <Route
          path="/Change"
          exact
          render={() => <ChangeItems items={items} onChange={handleChange} />}
        />
      </header>
    </div>
  );
}

export default App;
