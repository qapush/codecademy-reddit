import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSubreddits } from '../../features/subreditsSlice'

export default function SubredditsList() {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch])

  return (
    <ul>
        <li>Subreddit</li>
        <li>Subreddit</li>
        <li>Subreddit</li>
        <li>Subreddit</li>
        <li>Subreddit</li>
    </ul>
  )
}
