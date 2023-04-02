import React from 'react'
import './Switch.css';
import { MdStar, MdLocalFireDepartment, MdFiberNew, MdTrendingUp } from 'react-icons/md';

export default function Switch() {
  return (
    <div className="switch">
        <div className="switch-item">
            <MdStar />
            <span>Best</span>
        </div>
        <div className="switch-item">
            <MdLocalFireDepartment />
            <span>Hot</span>
        </div>
        <div className="switch-item">
            <MdFiberNew />
            <span>New</span>
        </div>
        <div className="switch-item">
            <MdTrendingUp />
            <span>Top</span>
        </div>
    </div>  
  )
}
