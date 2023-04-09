import React from "react";
import { useEffect } from "react";
import { selectFeed, selectCurrentFeed, fetchFeed, selectFeedLoading, selectFeedError } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import { Route } from "react-router-dom";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import { Comments } from "../Comments/Comments";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import './Feed.css';


export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(selectCurrentFeed);
    const isFeedLoading = useSelector(selectFeedLoading);
    const isFeedError = useSelector(selectFeedError);
    const dispatch = useDispatch();

    useEffect(() => {
        if(feedToLoad !== 'Search results') dispatch(fetchFeed(feedToLoad));
    }, [feedToLoad, dispatch])


    return(
        <div className="feed">
            <Route path="/" exact>
                <h2>{feedToLoad}</h2>
                {isFeedError ? <ErrorMessage/> : null}
                {isFeedLoading ? <SkeletonCard count={25}/> : <Posts feed={feed}/> }
            </Route>

            <Route path="/r/:subreddit/:postId" exact>
                <Comments/>
            </Route>
        </div>
    )
}