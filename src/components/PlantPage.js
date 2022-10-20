import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(plantsArray => setPlantsList(plantsArray))
  },[])
  
  const onNewPlant = (newPlant) => {
    setPlantsList((plantsArray) => ([...plantsArray, newPlant]))
  }

  const handleSearch = (query) => {
    setSearchTerm(query)
  }

    const filteredArray = plantsArray.filter((plant) => {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plantsArray={filteredArray}/>
    </main>
  );
}

export default PlantPage;
