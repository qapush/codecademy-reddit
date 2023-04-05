import React from 'react'
import { useState } from 'react';
import { MdSearch } from "react-icons/md";
import './Search.css'

export default function Search() {

    const [query, setQuery] = useState('');
    const handleChange = ({target}) => {
        setQuery(target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
      <div className='search'>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                value={query}
                onChange={handleChange}
            />
            <button type="submit">
                <MdSearch />
            </button>
          </form>
    </div>
  )
}
