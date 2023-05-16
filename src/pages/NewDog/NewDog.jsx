// npm modules
import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

//css
import styles from './NewDog.module.css'

const NewDog = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0,
    size: 'X-Small',
    sex: 'Male',
    color: '',
    food: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddDog(formData)
  }
  
  return ( 
    <section className={styles.newDogContainer}>
      <form onSubmit={handleSubmit} className={styles.newDogForm}>
        {/* <label htmlFor="name-input">Name</label> */}
        <TextField
          required
          type="text"
          name="name"
          label="Dog Name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        {/* <label htmlFor="breed-input">Breed</label> */}
        <TextField
          required
          type="text"
          name="breed"
          id="breed-input"
          label="Breed"
          value={formData.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        {/* <label htmlFor="age-input">Age</label> */}
        <TextField
          required
          name="age"
          id="age-input"
          label="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="size-input">Size</label>
        <select
          required
          name="size"
          id="size-input"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="X-Small">X-Small</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
        <label htmlFor="sex-input">Sex</label>
        <select
          required
          name="sex"
          id="sex-input"
          value={formData.sex}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="color-input">Color</label>
        <TextField
          required
          name="color"
          id="color-input"
          value={formData.color}
          onChange={handleChange}
        />
        <label htmlFor="food-input">Food</label>
        <TextField
          required
          name="food"
          id="food-input"
          value={formData.food}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth>SUBMIT</Button>
        </form>
    </section>
  );
}

export default NewDog;
