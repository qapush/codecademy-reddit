import React from 'react'
import './Comments.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, selectComments, selectCommentsLoading } from '../../features/commentsSlice'
import { SkeletonCard } from '../SkeletonCard/SkeletonCard'
import { Card } from '../Card/Card'
import ReactMarkdown from "react-markdown";


export const Comments = () => {

    const {subreddit, postId} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector(selectComments);
    const commentsLoading = useSelector(selectCommentsLoading);   
  let post = null;
  let commentsToRender = null;

    useEffect(() => {
        dispatch(fetchComments({subreddit, postId}))
    }, [dispatch, subreddit, postId])
  
    if (comments[0]) {
      post = <Card {...comments[0].data.children[0].data} comments />
    }
  
    if (comments[1]) {
      commentsToRender = comments[1].data.children.map(comment => {
        return comment.kind !== 'more' ? <div className="comment" key={comment.data.id}>
        <h4>- {comment.data.author}</h4>
        <ReactMarkdown>
          {comment.data.body}
        </ReactMarkdown>
      </div> : null
      } )
    }

  

    return (
      <div className="comments">
          { commentsLoading ? <SkeletonCard /> : post }
          <h2>Comments</h2>
          { commentsLoading ? <SkeletonCard /> : commentsToRender}
      </div>
    )
}
