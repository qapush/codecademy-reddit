import React from 'react'
import './Comments.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, selectComments, selectCommentsLoading } from '../../features/commentsSlice'
import { SkeletonCard } from '../SkeletonCard/SkeletonCard'
import { Card } from '../Card/Card'
import ReactMarkdown from "react-markdown";
import { TbUfo } from "react-icons/tb"



export const Comments = () => {

  window.scrollTo(0,0);

    const {subreddit, postId} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector(selectComments);
    const commentsLoading = useSelector(selectCommentsLoading);   
  let post = null;
  let commentsToRender = <div className='no-comments'><TbUfo className='ufo'/><span>no comments found...</span></div>;

    useEffect(() => {
        dispatch(fetchComments({subreddit, postId}))
    }, [dispatch, subreddit, postId])
  
    if (comments[0]) {
      post = <Card {...comments[0].data.children[0].data} comments />
    }
  
    if (comments[1] && comments[1].data.children.length > 0) {
      commentsToRender = comments[1].data.children
        .map(comment => {
          return makeComment(comment)
      } )
    }  

    return (
      <div className="comments">
          { commentsLoading ? <SkeletonCard /> : post }
          <h2>Comments</h2>
          { commentsLoading ? <SkeletonCard count={50}/> : commentsToRender}
      </div>
    )
}

function makeComment(comment) {
  if (comment.kind !== 'more') {
    return (
      <div className="comment" key={comment.data.id}>
    <h4>- {comment.data.author}</h4>
    <ReactMarkdown>
      {comment.data.body}
        </ReactMarkdown>
      { comment.data.replies ? comment.data.replies.data.children.map( item => makeComment(item)) : null}
  </div>
    )
  }
}