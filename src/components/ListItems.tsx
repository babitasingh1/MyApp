import React, { useState } from "react";

import { Link } from "react-router-dom";

function handleAdd() {
  console.log("came");
}

function ListItems() {
  const [items, setItems] = useState(["apple", "mangoes", "banana", "oranges"]);

  return (
    <div>
      {items.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
      <button onClick={handleAdd}>Add</button>
      <br></br>
      <Link to="/Add"></Link>
    </div>
  );
}

export default ListItems;
