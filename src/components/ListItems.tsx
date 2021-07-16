import React, { useState } from "react";
import "../App.css";

import { Link } from "react-router-dom";

function ListItems(props: any) {
  console.log(props);
  return (
    <div>
      {props.items.map((item: any) => (
        <ul>
          <div className="listItem  ">
            <li className="list-item">{item}</li>
            <div className=" deleteButton" onClick={() => props.onDelete(item)}>
              X
            </div>
          </div>
        </ul>
      ))}

      <Link to="/Add" className="links">
        Add item
      </Link>
      <Link to="/Change">Change item</Link>
    </div>
  );
}

export default ListItems;
