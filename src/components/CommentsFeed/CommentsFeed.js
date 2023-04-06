import React from 'react'
import {useParams} from 'react-router-dom';
import { Card } from '../Card/Card';
import { useSelector } from "react-redux";
import { selectFeed } from '../../features/feedSlice';
import './CommentsFeed.css';

export default function CommentsFeed() {

    const {subreddit, id} = useParams();
    const feed = useSelector(selectFeed);
    const {subreddit_name_prefixed, author, title, url, selftext, post_hint, media, num_comments} = feed.filter( post => post.id === id)[0];
    


  return (
    <div className="comments-card">
            <Card 
            nocomments
        subreddit_name_prefixed={subreddit_name_prefixed}
        author={author}
        title={title}
        url={url}
        selftext={selftext}
        post_hint={post_hint}
        media={media}
        id={id}
        />
    </div>
  )
}
