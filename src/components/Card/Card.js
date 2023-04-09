import React from "react";
import ReactMarkdown from "react-markdown";
import { MdForum } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({
  subreddit_name_prefixed,
  title,
  author,
  selftext,
  post_hint,
  url,
  media,
  num_comments,
  id,
  comments,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-subreddit">{subreddit_name_prefixed}</span>
        <span> • </span>
        <span className="card-author">Posted by {author}</span>
      </div>
      <h4 className="card-title">{title}</h4>
      {selftext && <ReactMarkdown>{selftext}</ReactMarkdown>}
      {post_hint === "image" && <img src={url} alt={title} />}
      {media &&
        media.reddit_video &&
        makeVideo(media.reddit_video.fallback_url)}
      {!comments && (
        <>
          <hr />
          <Link to={`/${subreddit_name_prefixed}/${id}`}>
            <p className="card-comments">
              <MdForum /> <span>{num_comments}</span> comments
            </p>
          </Link>
        </>
      )}
    </div>
  );
};

function makeVideo(src) {
  return (
    <video controls width="250">
      <source src={src}></source>
    </video>
  );
}
