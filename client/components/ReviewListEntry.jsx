import React, {useState, useEffect}from 'react';
import Moment from 'react-moment';

const ReviewListEntry = props => {
  
  return (
    <li>
      <div className="review-author">{props.review.author}</div>
      <div className="review-date"><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></div>
      <div className="stars">{props.review.stars}</div>
      <div className="purchased-item">{props.review.purchasedItem}</div>
      <img className="review-image" src={props.review.imageUrl}/>
      <div className="review-body">{props.review.reviewBody}</div>
      <button className="review-helpful">Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;