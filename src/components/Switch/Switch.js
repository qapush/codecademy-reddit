import React from 'react'
import './Switch.css';
import { MdStar, MdFiberNew, MdTrendingUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { currentFeedChange, currentFeed } from '../../features/feedSlice';

export default function Switch() {

    const dispatch = useDispatch();
    const feedName = useSelector(currentFeed);

    function className(name) {
        return (feedName === name) ? 'switch-item active' : 'switch-item';
    }

  return (
    <div className="switch">
        <div className={className('Best')} onClick={() => dispatch(currentFeedChange("Best"))}>
            <MdStar />
            <span>Best</span>
        </div>
        <div className={className('New')} onClick={() => dispatch(currentFeedChange("New"))}>
            <MdFiberNew />  
            <span>New</span>
        </div>
        <div className={className('Top')} onClick={() => dispatch(currentFeedChange("Top"))}>
            <MdTrendingUp />
            <span>Top</span>
        </div>
    </div>  
  )
}

