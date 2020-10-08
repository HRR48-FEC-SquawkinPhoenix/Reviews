import React, {useState, useEffect}from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import styles from './reviewlistentry.module.css';

const ReviewListEntry = props => {
 
  var stars = <Rating
  initialRating={props.review.stars}
  readonly={true}   
  emptySymbol={<FontAwesomeIcon icon={farStar}/>}
  fullSymbol={<FontAwesomeIcon icon={faStar}/>}
  fractions={2}    
  />

  
  return (
    <li className={styles.reviewsContainer}>
      <div className={styles.nameDate}>
        <img className={styles.authorImage} src={props.review.authorPhoto}/>
        <p className={styles.reviewAuthor}>{props.review.author}</p>
        <p className={styles.reviewDate}><Moment interval={1500} format="MMM D, YYYY" withTitle>{props.review.date}</Moment></p>
      </div>
      <div>
        <div className={styles.starsItemBody}>
          <span className={styles.stars}>{stars}</span>
          <p className={styles.purchasedDescription}>{props.review.itemDescription}</p>
          <div className={styles.bodyImage}>
            <p className={styles.reviewBody}>{props.review.reviewBody}</p>            
            <img className={styles.reviewImage} src={props.review.imageUrl} onClick={(e) => {props.onReviewPhotoClickActivateModal(e, props.review)}}/>
          </div>
          <p className={styles.purchasedItem}>{props.review.purchasedItem}</p>      
        </div>  
    </div>  
      <button className={styles.reviewHelpful}><FontAwesomeIcon icon={faThumbsUp}/> Is this review helpful?</button>
    </li>
  )
}



export default ReviewListEntry;