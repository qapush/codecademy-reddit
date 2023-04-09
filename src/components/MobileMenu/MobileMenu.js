import React from 'react'
import SubredditsList from '../SubredditsList/SubredditsList'
import Search from '../Search/Search';
import './MobileMenu.css';


export default function MobileMenu({ show }) {

  return (  
    <div className={`mobile__menu ${show ? ' show' : ''}`}>
          <div className="subreddits">
              <SubredditsList />
              <Search/>
        </div>
    </div>
  )
}
