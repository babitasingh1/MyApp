import React, { useState } from "react";

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

      <Link to="/Add">Add item</Link>
    </div>
  );
}

export default ListItems;
