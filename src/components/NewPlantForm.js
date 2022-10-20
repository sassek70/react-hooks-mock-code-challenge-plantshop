import React, { useState } from "react";

function NewPlantForm({onNewPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0.00
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name] : value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onNewPlant(formData)
    setFormData({ name: "",
      image: "",
      price: 0.00
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" value={formData.price} placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
