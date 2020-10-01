import React, {useState, useEffect}from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

const ReviewListEntry = props => {
 
  var stars = <Rating
  initialRating={props.review.stars}
  readonly={true}   
  emptySymbol={<FontAwesomeIcon icon={farStar}/>}
  fullSymbol={<FontAwesomeIcon icon={faStar}/>}
  fractions={2}    
  />

  
  return (
    <li>
      <div className="review-author">{props.review.author}</div>
      <div className="review-date"><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></div>
      <div className="stars">{stars}</div>
      <div className="purchased-item">{props.review.purchasedItem}</div>
      <img className="review-image" src={props.review.imageUrl}/>
      <div className="review-body">{props.review.reviewBody}</div>
      <button className="review-helpful">Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;