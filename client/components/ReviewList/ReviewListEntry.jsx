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
    <li className="reviewsContainer">
      <div className="nameDate">
        <img className="authorImage" src={props.review.authorPhoto}/>
        <p className="reviewAuthor">{props.review.author}</p>
        <p className="reviewDate"><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></p>
      </div>
      <div>
        <div className="starsItemBody">
          <span className="stars">{stars}</span>
          <p className="purchasedDescription">{props.review.itemDescription}</p>
          <div className="bodyImage">
            <p className="reviewBody">{props.review.reviewBody}</p>            
            <img className="reviewImage" src={props.review.imageUrl} onClick={(e) => {props.onReviewPhotoClickActivateModal(e, props.review)}}/>
          </div>
          <p className="purchasedItem">{props.review.purchasedItem}</p>      
        </div>  
    </div>  
      <button className="reviewHelpful"><FontAwesomeIcon icon={faThumbsUp}/> Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;