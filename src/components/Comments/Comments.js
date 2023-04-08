import React from 'react'
import './Comments.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, selectComments, selectCommentsLoading } from '../../features/commentsSlice'
import { SkeletonCard } from '../SkeletonCard/SkeletonCard'


export const Comments = () => {

    const {subreddit, postId} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector(selectComments);
    const commentsLoading = useSelector(selectCommentsLoading);

    useEffect(() => {
        dispatch(fetchComments({subreddit, postId}))
    }, [dispatch, subreddit, postId])


  return (
    <div className="comments">
        <h2>Comments</h2>
        { commentsLoading && <SkeletonCard />}
    </div>
  )
}
