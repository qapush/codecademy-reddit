import React from "react";
import './Card.css';
import ReactMarkdown from 'react-markdown'
import Skeleton from "react-loading-skeleton";

export  const Card = ({subreddit, title, author, selftext, post_hint, url, media}) => {
    return(
        <div className="card">
            <div className="card-header">
                <span className="card-subreddit">{subreddit || <Skeleton/>}</span>
                <span> • </span>
                <span className="card-author">Posted by {author}</span>
                
            </div>
            <h4 className="card-title">{title}</h4>
            { selftext && <ReactMarkdown>{selftext}</ReactMarkdown> }
            { post_hint === "image" && <img src={url} alt={title} /> }
            { media && media.reddit_video && makeVideo(media.reddit_video.fallback_url)}

        </div>
    )
}

function makeVideo(src){
    return(
        <video controls width="250">
           <source src={src}></source>
        </video>
    )
}