import React from "react";
import "./Switch.css";
import { MdStar, MdFiberNew, MdTrendingUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { currentFeedChange, selectCurrentFeed } from "../../features/feedSlice";
import { Link } from "react-router-dom";

export default function Switch() {
  const dispatch = useDispatch();
  const feedName = useSelector(selectCurrentFeed);

  const switchItems = [["Best", MdStar], ["New", MdFiberNew], ["Top", MdTrendingUp]];

  function className(name) {
    return feedName === name ? "switch-item active" : "switch-item";
  }

  return (
    <div className="switch">
      {switchItems.map((item) => {
        return (
          <Link to="/" key={item[0]}>
            <div
              className={className(item[0])}
              onClick={() => dispatch(currentFeedChange(item[0]))}
            >
              { item[1]() }
              <span>{item[0]}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
