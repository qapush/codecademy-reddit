import React from "react";
import { useEffect } from "react";
import { selectFeed, selectCurrentFeed, fetchFeed, selectFeedLoading } from "../../features/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import { Route } from "react-router-dom";
import './Feed.css';
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";


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
                {isFeedLoading ? <SkeletonCard/> : <Posts feed={feed}/> }
            </Route>
            <Route path="/r/:subreddit/:postId" exact render={(props) => {
                const { postId} = props.match.params;
                const onePost = feed.filter(post => post.id === postId)
                return <Posts feed={onePost} comments/>
            }}>
                    
            </Route>
        </div>
    )
}