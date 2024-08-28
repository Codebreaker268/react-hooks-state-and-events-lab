import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [filter,setFilter]=useState('all')
  function handleFilter(e){
    setFilter(e.target.value)
  }
  const filtered=filter==='all'?items:items.filter(item=>item.category===filter)

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter} value={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
