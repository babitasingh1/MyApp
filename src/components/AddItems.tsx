import React, { useState } from "react";

function AddItems(props: any) {
  //console.log(props.location.state);
  const [fruitName, setFruitName] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //props.location.state;
          props.onAdd(fruitName);
        }}
      >
        <label htmlFor="fruitName" style={{ marginRight: 10 }}>
          fruitName
        </label>
        <input
          name="fruitName"
          type="input"
          placeholder="fruitName"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default AddItems;
