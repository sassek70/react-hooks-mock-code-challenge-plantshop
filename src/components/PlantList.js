import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray}) {

  const displayPlants = plantsArray.map((plant) => {
    const { id, name, image, price } = plant
    return <PlantCard key={name} id={id} name={name} image={image} price={price}/>
  })

  return (
    <ul className="cards">
      {displayPlants}</ul>
  );
}

export default PlantList;
