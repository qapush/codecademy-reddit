import React from "react";
import { useEffect } from "react";
import { selectFeed, selectCurrentFeed, fetchFeed, selectFeedLoading } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import './Feed.css';
import { Route } from "react-router-dom";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import { Comments } from "../Comments/Comments";


export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(selectCurrentFeed);
    const isFeedLoading = useSelector(selectFeedLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFeed(feedToLoad))
    }, [feedToLoad, dispatch])

    return(
        <div className="feed">
            <Route path="/" exact>
                {isFeedLoading ? <SkeletonCard count={25}/> : <Posts feed={feed}/> }
            </Route>
            <Route path="/r/:subreddit/:postId" >
                <Comments/>
            </Route>
        </div>
    )
}