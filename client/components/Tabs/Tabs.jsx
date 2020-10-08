import React from 'react';
import styles from './tabs.module.css';


const Tabs = (props) => {
  
  return ( 
  <div className={styles.reviewTabs}>
    <button className={styles.reviewTab} onClick={(e) => {props.tabClick(e, 12)}}>Reviews for this item <div className={styles.tabReviewNumber}>{props.numReviewsItem}</div> </button>  
    <button className={styles.reviewTab} onClick={props.showAllClick}>Reviews for this shop <div className={styles.tabReviewNumber}>{props.numReviews}</div> </button>  
  </div>  
  )


};

export default Tabs



