import React from 'react';


const Tabs = (props) => {
  
  return ( 
  <div className="reviewTabs">
    <button className="reviewTab" onClick={(e) => {props.tabClick(e, 12)}}>Reviews for this item <div className="tabReviewNumber">{props.numReviewsItem}</div> </button>  
    <button className="reviewTab" onClick={props.showAllClick}>Reviews for this shop <div className="tabReviewNumber">{props.numReviews}</div> </button>  
  </div>  
  )


};

export default Tabs



