import React from 'react'
import {  useSelector } from 'react-redux'
import { selectSubreddits } from '../../features/subreditsSlice'
import Subreddit from '../Subreddit/Subreddit';
import './SubredditList.css';

export default function SubredditsList() {  
  
  const subreddits = useSelector(selectSubreddits);
  let list = null;
  
  if (!subreddits.length) {
    return
  } else {
    list = subreddits.map( ({display_name_prefixed, id, icon_img}) => {
      return <Subreddit
        key={id}
        img={icon_img}
        name={display_name_prefixed}
      />
    })
  }


  return (
    <div className='subreddit-list'>
      <h2>Subreddits:</h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}
