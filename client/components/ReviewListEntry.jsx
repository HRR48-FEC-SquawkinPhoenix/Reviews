import React, {useState, useEffect}from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

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
        <img className="author-image" src={props.review.authorPhoto}/>
        <p className="review-author">{props.review.author}</p>
        <p className="review-date"><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></p>
      </div>
      <div>
        <div className="stars-item-body">
          <span className="stars">{stars}</span>
          <p className="purchased-description">{props.review.itemDescription}</p>
          <div className="body-image">
            <p className="review-body">{props.review.reviewBody}</p>            
            <img className="review-image" src={props.review.imageUrl} onClick={(e) => {props.onReviewPhotoClickActivateModal(e, props.review)}}/>
          </div>
          <p className="purchased-item">{props.review.purchasedItem}</p>      
        </div>  
    </div>  
      <button className="review-helpful"><FontAwesomeIcon icon={faThumbsUp}/> Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;