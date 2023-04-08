import React from 'react'
import defaultLogo from '../../img/default-logo.svg';
import { currentFeedChange, selectCurrentFeed } from '../../features/feedSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Subreddit.css';
import { mobileMenuClose, selectMobileMenuOpened } from '../../features/mobileMenuSlice';
import { Link } from 'react-router-dom';

export default function Subreddit({name, img}) {

  const dispatch = useDispatch();
  const feed = useSelector(selectCurrentFeed);
  const mobileMenuOpened = useSelector(selectMobileMenuOpened);

  const handleClick = () => {
    dispatch(currentFeedChange(name))
    if(mobileMenuOpened) dispatch(mobileMenuClose())
  }
  
  return (
    <Link to="/" className='subreddit-link'>
      <li className={ `subreddit ${feed === name ? 'active' : ''}` } onClick={handleClick}>
          <img src={ img || defaultLogo } alt={name} />
          <span>{name}</span>
      </li>
    </Link>
  )
}
