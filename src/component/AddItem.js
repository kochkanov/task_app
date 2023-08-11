import React from "react";
import "./AddItem.css";

const AddItem = () => {
  let itemCount = 1;
  function addItem() {
    const addButton = document.getElementById("addItemButton");
    const itemList = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemCount}`;
    itemList.appendChild(newItem);
    itemCount++;
  }

  return (
    <div className="addItem">
      <div>
        <button onClick={() => addItem()} id="addItemButton">
          CLICK
        </button>
        <ul id="itemList"></ul>
      </div>
    </div>
  );
};
export default AddItem;
