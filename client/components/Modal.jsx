import React from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';

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
        <div className="modal">
          <img className="modal-image" src={review.imageUrl}/>
          <button className="close-modal" onClick={close}><FontAwesomeIcon icon={faTimesCircle}/></button>
          <div className="modal-review-data">
            <div className="modal-image-date-author">
              <img className="modal-author-image" src={review.authorPhoto}/>
              <div className="modal-date-author">
                <p className="modal-date"><Moment interval={1500} format="MMM D, YYYY" withTitle>{review.date}</Moment></p>
                <p className="modal-author">{review.author}</p>
              </div>
              <span className="modal-stars">{stars}</span>
              <p className="modal-body">{review.reviewBody}</p>
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