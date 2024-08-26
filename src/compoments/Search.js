import React from 'react'
import '../compoments/Search.css'; 

const Search = ({onSearchHandler}) => {

  const SearchHandler=(e)=>{
      onSearchHandler(e.target.value);
  }

  return (
    <div>
      <input type='input' id='searchBar' onChange={SearchHandler} placeholder='Search Area 🔍'  />
    </div>
  )
}

export default Search
