import React from 'react'
import './SearchResultList.css'
import SearchResult from './SearchResult'
const SearchResultList = ({results, setTapName}) => {
  return (
    <>
    <div className='results-list'>{results.map((item, id) =>{
        return <SearchResult setTapName={setTapName} key={id} result={item}/>
    })}</div>
    </>
  )
}

export default SearchResultList