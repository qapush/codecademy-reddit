import React from 'react'
import './SkeletonCard.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonCard = ({count}) => {
  return (
      Array(count).fill(0).map((_, i) => {
          return <div key={i} className="skeleton-card">
              <Skeleton count={ 5 } />
        </div>
     })
  )
}
