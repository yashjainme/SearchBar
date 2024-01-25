import React, { useState } from 'react'
import './SearchResult.css'
const SearchResult = ({result, setTapName}) => {
    


    const handleChange = () =>{
        setTapName(result.name)

        
    }
  return (
    <div className='search-result' onClick={() => handleChange()}>{result.name}</div>
  )
}

export default SearchResult

