import React from "react";
import { useEffect } from "react";
import { selectFeed, currentFeed, fetchFeed } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card";
import './Feed.css';

export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(currentFeed);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(fetchFeed(feedToLoad))
    }, [feedToLoad])

    let feedContent = null;

    if(feed) {
        feedContent = feed.map( ({subreddit_name_prefixed, id, author, title, url, selftext, post_hint, media}) => {
            return <Card 
            key={id} 
            subreddit={subreddit_name_prefixed}
            author={author}
            title={title}
            url={url}
            selftext={selftext}
            post_hint={post_hint}
            media={media}
            />
        })
    }

    return(
        <div className="feed">
            <h2>Feed</h2>
            <ul>
                {feedContent}
            </ul>
        </div>
    )
}