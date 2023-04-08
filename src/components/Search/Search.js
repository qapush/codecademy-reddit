import React from 'react'
import { useState } from 'react';
import { MdSearch } from "react-icons/md";
import './Search.css'
import { search, currentFeedChange } from '../../features/feedSlice';
import { mobileMenuClose } from '../../features/mobileMenuSlice';
import { useDispatch } from 'react-redux';

export default function Search() {

    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const handleChange = ({target}) => {
        setQuery(target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(currentFeedChange('Search results'));
        dispatch(search(query))
        dispatch(mobileMenuClose())
        setQuery('');
    }

  return (
      <div className='search'>
          <form onSubmit={handleSubmit}>
            <input
                  type="text"
                  autoComplete='off'
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
