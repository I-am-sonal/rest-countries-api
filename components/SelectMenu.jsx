import React from 'react'

const SelectMenu = ({ setQuery }) => {
  const handleFilterChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value.toLowerCase())
  }
  return (
    <select className='filter-by-region' onChange={handleFilterChange}>
      <option hidden>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  )
}

export default SelectMenu
