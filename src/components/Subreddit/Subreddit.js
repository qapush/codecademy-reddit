import React from 'react'
import defaultLogo from '../../img/default-logo.svg';
import { currentFeedChange } from '../../features/feedSlice';
import { useDispatch } from 'react-redux';
import './Subreddit.css';

export default function Subreddit({name, img}) {

  const dispatch = useDispatch();

  return (
      <li className='subreddit' onClick={() => dispatch(currentFeedChange(name))}>
          <img src={ img || defaultLogo } alt={name} />
          <span>{name}</span>
      </li>
  )
}
