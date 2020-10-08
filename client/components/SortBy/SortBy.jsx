import React from 'react';
import styles from './sortby.module.css';


const SortBy = (props) => {
  return (
    <label className={styles.sortByLabel}>Sort By:
      <select className={styles.sortBySelect} onChange={(e) => {props.sortByOnClick(e, e.target.value, props.data)}}>
        <option value="Recommended">Recommended</option>
        <option value="Newest">Newest</option>       
      </select>
    </label>
  )   
}

export default SortBy;