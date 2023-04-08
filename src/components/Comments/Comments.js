import React from 'react'
import './Comments.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, selectComments } from '../../features/commentsSlice'
import { Redirect } from 'react-router-dom'
import { selectFeed } from '../../features/feedSlice'

export const Comments = () => {

    const feed = useSelector(selectFeed);
    const {subreddit, postId} = useParams()
    console.log(subreddit);
   
    

    
    const dispatch = useDispatch()
    const comments = useSelector(selectComments);

    useEffect(() => {
        dispatch(fetchComments({subreddit, postId}))
    }, [dispatch, subreddit, postId])

     
    if ( feed.some( item => item.id === subreddit)) {
        return <Redirect to="/" />;
    };

  return (
    <div className="comments">
        <h2>Comments</h2>
    </div>
  )
}
