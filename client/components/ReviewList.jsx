import React, {useState, useEffect} from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
  
const ReviewList = (props) => {    

  return (
    <div>
      <ul>        
        {props.reviews.map((review) => {
          return <ReviewListEntry
          review={review}
          key={review._id}
          />
        })}
      </ul>
    </div>
  )
}





export default ReviewList;