import React, { useState } from "react";

// destructure the onAddItem prop
function ItemForm({ onAddItem }) {
  const [category, setCategory] = useState("Income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  // Add function to handle submissions
  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      category: category,
      description: description,
      date: date,
      amount: amount,
      isInCart: false,
    };
    // console.log("name:", name);
    // console.log("category:", category);
    // console.log(itemData);
    fetch("http://localhost:3002/db.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      // .then((newItem) => console.log(newItem));
      .then((newItem) => onAddItem(newItem));

  
    }

  return (
    <form className="NewItem" onSubmit={handleSubmit}> 
      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
        <option value="Income">Income</option>
        <option value="Food">Food</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
        <option value="Entertainment">Entertainment</option>
        </select>
      </label>

      <label>
      Description:
      <input
          type="text"
          name="description"
          value={description}
          placeholder="Eg. Paycheck from Bob's"
          onChange={(e) => setDescription(e.target.value)}
        /> 
      </label>

      <label>
      Date:
      <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label>
      Amount:
      <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
        

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
