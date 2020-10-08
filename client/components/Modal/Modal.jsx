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
        <div className="reviewModal">
          <img className="reviewModalImage" src={review.imageUrl}/>
          <button className="reviewCloseModal" onClick={close}><FontAwesomeIcon icon={faTimesCircle}/></button>
          <div className="modalReviewData">
            <div className="modalImageDateAuthor">
              <img className="modalAuthorImage" src={review.authorPhoto}/>
              <div className="modalDateAuthor">
                <p className="modalDate"><Moment interval={1500} format="MMM D, YYYY" withTitle>{review.date}</Moment></p>
                <p className="modalAuthor">{review.author}</p>
              </div>
              <span className="modalStars">{stars}</span>
              <p className="modalBody">{review.reviewBody}</p>
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