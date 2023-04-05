import React from "react";
import { useEffect } from "react";
import { selectFeed, currentFeed, fetchFeed, selectFeedLoading } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import './Feed.css';

export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(currentFeed);
    const isFeedLoading = useSelector(selectFeedLoading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchFeed(feedToLoad))
    }, [feedToLoad])

    const feedContent = feed.map( ({subreddit_name_prefixed, id, author, title, url, selftext, post_hint, media}) => {
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

    if(isFeedLoading) window.scrollTo(0, 0)

    return(
        <div className="feed">
            <h2>{feedToLoad}</h2>
            
            {isFeedLoading ? <SkeletonCard/> : <ul>
                {feedContent}
            </ul>}
            
        </div>
    )
}