import React from 'react'
import defaultLogo from '../../img/default-logo.svg';
import { currentFeedChange } from '../../features/feedSlice';
import { useDispatch } from 'react-redux';
import './Subreddit.css';
import { mobileMenuClose } from '../../features/mobileMenuSlice';

export default function Subreddit({name, img}) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(currentFeedChange(name))
    dispatch(mobileMenuClose())
  }

  return (
      <li className='subreddit' onClick={handleClick}>
          <img src={ img || defaultLogo } alt={name} />
          <span>{name}</span>
      </li>
  )
}
