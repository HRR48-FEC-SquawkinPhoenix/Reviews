import React from 'react';


const Tabs = (props) => {
  
  return ( 
  <div className="tabs">
    <button className="tab" onClick={(e) => {props.tabClick(e, 12)}}>Reviews for this item <div className="tab-review-number">{props.numReviewsItem}</div> </button>  
    <button className="tab" onClick={props.showAllClick}>Reviews for this shop <div className="tab-review-number">{props.numReviews}</div> </button>  
  </div>  
  )


};

export default Tabs



