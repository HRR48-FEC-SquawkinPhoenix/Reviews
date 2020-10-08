import React, {useState, useEffect} from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';


  
const ReviewList = ({reviews, onReviewPhotoClickActivateModal}) => {    
  
  
  return (
    <div>
      <ul>        
        {reviews.map((review) => {          
          return <ReviewListEntry
          review={review}
          onReviewPhotoClickActivateModal={onReviewPhotoClickActivateModal}          
          key={review._id}
          />
        })}
      </ul>      
    </div>
  )
}





export default ReviewList;