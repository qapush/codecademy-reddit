import React from "react";
import { Card } from "../Card/Card";
import { Comments } from "../Comments/Comments";
import { AnimatedList } from 'react-animated-list';


export default function Posts({ feed, comments }) {
  
  window.scrollTo(0, 0);

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
    <AnimatedList animation={"grow"} initialAnimationDuration={3000}>
    {feedContent}
    </AnimatedList>
    {comments ? <Comments/> : null }
  </>;
}
