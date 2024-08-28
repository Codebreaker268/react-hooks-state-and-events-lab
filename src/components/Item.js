import React, { useState } from "react";

function Item({ name, category }) {
  const [bought, setBought] = useState(false);
  
  // Define class based on the bought state
  const className = bought ? "in-cart" : "";

  // Define button text based on the bought state
  const buttonText = bought ? "Remove from cart" : "Add to cart";

  // Toggle the bought state
  function handleBought() {
    setBought(prevBought => !prevBought);
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleBought}>{buttonText}</button>
    </li>
  );
}

export default Item;
