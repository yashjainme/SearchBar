

import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultList from './components/SearchResultList'

function App() {
  const [results, setResults] = useState([])
  const [tapname, setTapName] = useState("")

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar tapname={tapname} setResults = {setResults}/>
         <SearchResultList setTapName={setTapName} results = {results}/>
        </div>
      </div>
    </>
  )
}

export default App
