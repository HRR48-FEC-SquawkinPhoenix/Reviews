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
    <li className="container">
      <div className="name-date">
        <p className="review-author">{props.review.author}</p>
        <p className="review-date"><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></p>
      </div>
      <div>
        <div className="stars-item-body">
          <h1 className="stars">{stars}</h1>
          <h3 className="review-body">{props.review.reviewBody}</h3>
          <h2 className="purchased-item">{props.review.purchasedItem}</h2>      
        </div>  
      <img className="review-image" src={props.review.imageUrl}/>
    </div>  
      <button className="review-helpful">Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;