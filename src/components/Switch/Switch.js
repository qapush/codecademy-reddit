import React from 'react'
import './Switch.css';
import { MdStar, MdFiberNew, MdTrendingUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { currentFeedChange } from '../../features/feedSlice';

export default function Switch() {

    const dispatch = useDispatch();

  return (
    <div className="switch">
        <div className="switch-item" onClick={() => dispatch(currentFeedChange("best"))}>
            <MdStar />
            <span>Best</span>
        </div>
        <div className="switch-item" onClick={() => dispatch(currentFeedChange("new"))}>
            <MdFiberNew />  
            <span>New</span>
        </div>
        <div className="switch-item" onClick={() => dispatch(currentFeedChange("top"))}>
            <MdTrendingUp />
            <span>Top</span>
        </div>
    </div>  
  )
}
