import React from 'react'
import defaultLogo from '../../img/default-logo.svg';
import { currentFeedChange, currentFeed } from '../../features/feedSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Subreddit.css';
import { mobileMenuClose } from '../../features/mobileMenuSlice';

export default function Subreddit({name, img}) {

  const dispatch = useDispatch();
  const feed = useSelector(currentFeed);

  const handleClick = () => {
    dispatch(currentFeedChange(name))
    dispatch(mobileMenuClose())
  }
  
  return (
    <li className={ `subreddit ${feed === name ? 'active' : ''}` } onClick={handleClick}>
          <img src={ img || defaultLogo } alt={name} />
          <span>{name}</span>
      </li>
  )
}
