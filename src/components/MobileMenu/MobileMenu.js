import React from 'react'
import SubredditsList from '../SubredditsList/SubredditsList'
import Search from '../Search/Search';
import './MobileMenu.css';


export default function MobileMenu({ show }) {
    
    let menuClass = 'mobile__menu';
    if (show) menuClass += ' show';

  return (  
    <div className={menuClass}>
          <div className="subreddits">
              <SubredditsList />
              <Search/>
        </div>
    </div>
  )
}
