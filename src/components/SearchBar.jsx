// SearchBar.jsx

import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ setResults, tapname }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(tapname); // Set input value to tapname whenever tapname changes
  }, [tapname]);

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => value && item && item.name && item.name.toLowerCase().includes(value.toLowerCase()));
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
