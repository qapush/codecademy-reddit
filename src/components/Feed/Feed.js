import React from "react";
import { useEffect } from "react";
import { selectFeed, selectCurrentFeed, fetchFeed, selectFeedLoading, selectFeedError } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import './Feed.css';
import { Route } from "react-router-dom";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import { Comments } from "../Comments/Comments";
import { TbFaceIdError } from "react-icons/tb";


export const Feed = () => {

    const feed = useSelector(selectFeed);
    const feedToLoad = useSelector(selectCurrentFeed);
    const isFeedLoading = useSelector(selectFeedLoading);
    const isFeedError = useSelector(selectFeedError);
    const dispatch = useDispatch();

    useEffect(() => {
        if(feedToLoad !== 'Search results') dispatch(fetchFeed(feedToLoad))
    }, [feedToLoad, dispatch])

    const errorMessage = <div className="feed-error"><TbFaceIdError /><span>Failed to load</span></div>;

    return(
        <div className="feed">
            <Route path="/" exact>
                <h2>{feedToLoad}</h2>
                {isFeedError ? errorMessage : null}
                {isFeedLoading ? <SkeletonCard count={25}/> : <Posts feed={feed}/> }
            </Route>

            <Route path="/r/:subreddit/:postId" exact>
                <Comments/>
            </Route>
        </div>
    )
}