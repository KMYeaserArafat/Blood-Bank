import React from 'react'
import '../compoments/Search.css'; 

const Search = ({onSearchHandler, searchTitle}) => {

  const SearchHandler=(e)=>{
      onSearchHandler(e.target.value);
  }

  return (
    <div>
      <input type='input' id='searchBar' onChange={SearchHandler} placeholder={searchTitle}  />
    </div>
  )
}

export default Search
