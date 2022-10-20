import React, { useState } from "react";

function PlantCard({name, image, price}) {
  const [isInStock, setIsInStock] = useState(true)
  
  const toggleSoldOut = () =>{
    setIsInStock((isSoldOut) => !isSoldOut)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={toggleSoldOut}>In Stock</button>
      ) : (
        <button onClick={toggleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
