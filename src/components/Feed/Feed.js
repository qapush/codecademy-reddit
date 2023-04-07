import React from "react";
import { useEffect } from "react";
import { selectFeed, currentFeed, fetchFeed, selectFeedLoading } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import './Feed.css';


import { fetchComments } from "../../features/commentsSlice";

export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(currentFeed);
    const isFeedLoading = useSelector(selectFeedLoading);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchFeed(feedToLoad))
        dispatch(fetchComments({subreddit: 'web_design', postId: '12bh9d6'}))
    }, [feedToLoad, dispatch])

    const feedContent = feed.map( feedData => {
        const {subreddit_name_prefixed, id, author, title, url, selftext, post_hint, media, num_comments} = feedData;
        return <Card 
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