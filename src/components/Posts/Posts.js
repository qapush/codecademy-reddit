import React from "react";
import { Card } from "../Card/Card";
import { Comments } from "../Comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {currentFeedChange} from '../../features/feedSlice';



export default function Posts({ feed, comments }) {
  
  window.scrollTo(0, 0);

  const {subreddit} = useParams();
  const dispatch = useDispatch()

  if(comments && feed.length === 0) dispatch(currentFeedChange('r/' + subreddit));

  const feedContent = feed.map((feedData) => {
    const {
      subreddit_name_prefixed,
      id,
      author,
      title,
      url,
      selftext,
      post_hint,
      media,
      num_comments,
    } = feedData;

    return (
      <Card
        key={id}
        subreddit_name_prefixed={subreddit_name_prefixed}
        author={author}
        title={title}
        url={url}
        selftext={selftext}
        post_hint={post_hint}
        media={media}
        num_comments={num_comments}
        id={id}
        comments={comments}
      />
    );
  });

  return <>
    {feedContent}
    {comments ? <Comments/> : null }
  </>;
}
