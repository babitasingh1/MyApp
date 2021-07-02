import React, { useState } from "react";

import { Link } from "react-router-dom";

function handleAdd() {
  console.log("came here");
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

      <Link
        to={{
          pathname: "/Add",
          state: { additem: handleAdd },
        }}
      >
        Add item
      </Link>
    </div>
  );
}

export default ListItems;
