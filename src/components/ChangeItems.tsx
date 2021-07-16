import React, { useState } from "react";

const ChangeItems = (props: any) => {
  console.log(props);
  const [newValue, setNewValue] = useState("");
  const [oldValue, setOldValue] = useState("");

  // function onSubmit() {
  //   console.log("changed");
  //   console.log(newValue);
  // }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onChange(oldValue, newValue);
        }}
      >
        <label htmlFor="fruitName" style={{ marginRight: 10 }}>
          fruitName
        </label>
        <select
          name="FruitName"
          value={oldValue}
          onChange={(e) => {
            setOldValue(e.target.value);
          }}
        >
          {props.items.map((item: any) => (
            <option>{item}</option>
          ))}
        </select>
        <br></br>
        <label htmlFor="newName">newName </label>
        <input
          type="text"
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChangeItems;
