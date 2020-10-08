import React from 'react';
import styles from './sortby.module.css';


const SortBy = (props) => {
  return (
    <div className={styles.sortingButtonContainer}>
      <div className={styles.sortingButton}>
        <label className={styles.sortByLabel}>Sort By:
          <select className={styles.sortBySelect} onChange={(e) => {props.sortByOnClick(e, e.target.value, props.data)}}>
            <option value="Recommended">Recommended</option>
            <option value="Newest">Newest</option>       
          </select>
        </label>
      </div>
    </div>  
  )   
}

export default SortBy;