import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Income">Income</option>
        <option value="Food">Food</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
        <option value="Entertainment">Entertainment</option>



      </select>
    </div>
  );
}

export default Filter;
