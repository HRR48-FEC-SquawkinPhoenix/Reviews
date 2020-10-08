import React, {useState, useEffect} from 'react';
import styles from './carouselbutton.module.css';


const CarouselButton = ({buttonNum, onPageNumberButtonClick, arrOfFours}) => {  
  return (
  <button className={styles.pageNumberBtn} onClick={(e) => {
    onPageNumberButtonClick(e, arrOfFours[buttonNum - 1], buttonNum - 1)  
  }}>{buttonNum}</button>
  )

}

export default CarouselButton;