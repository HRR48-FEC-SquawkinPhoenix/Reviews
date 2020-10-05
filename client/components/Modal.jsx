import React from 'react';

const Modal = ({modal, review}) => {
  
console.log(review);

  if (modal) {
    return (
      <div id="modal">
        <img src={review.imageUrl}/>
      </div>
    )
  } else {
    return null;
  }
  
}

export default Modal;