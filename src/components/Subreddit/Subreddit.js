import React from 'react'
import defaultLogo from '../../img/default-logo.svg';
import './Subreddit.css';

export default function Subreddit({name, img}) {
  return (
      <li className='subreddit'>
          <img src={ img || defaultLogo } alt={name} />
          <span>{name}</span>
      </li>
  )
}
