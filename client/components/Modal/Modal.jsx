import React from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import styles from './modal.module.css';

const Modal = ({modal, review, close}) => {
  

  var stars = <Rating
  initialRating={review.stars}
  readonly={true}   
  emptySymbol={<FontAwesomeIcon icon={farStar}/>}
  fullSymbol={<FontAwesomeIcon icon={faStar}/>}
  fractions={2}    
  /> 


  if (modal) {
    return (
      <div>        
        <div className={styles.reviewModal}>
          <img className={styles.reviewModalImage} src={review.imageUrl}/>
          <button className={styles.reviewCloseModal} onClick={close}><FontAwesomeIcon icon={faTimesCircle}/></button>
          <div className={styles.modalReviewData}>
            <div className={styles.modalImageDateAuthor}>
              <img className={styles.modalAuthorImage} src={review.authorPhoto}/>
              <div className={styles.modalDateAuthor}>
                <p className={styles.modalDate}><Moment interval={1500} format="MMM D, YYYY" withTitle>{review.date}</Moment></p>
                <p className={styles.modalAuthor}>{review.author}</p>
              </div>
              <span className={styles.modalStars}>{stars}</span>
              <p className={styles.modalBody}>{review.reviewBody}</p>
            </div>               
          </div>  
        </div>
      </div>  
    )
  } else {
    return null;
  }
  
}

export default Modal;