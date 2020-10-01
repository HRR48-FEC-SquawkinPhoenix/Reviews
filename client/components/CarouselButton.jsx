import React, {useState, useEffect} from 'react';


const CarouselButton = ({buttonNum, onPageNumberButtonClick, arrOfFours}) => {  
  return (
  <button onClick={(e) => {
    onPageNumberButtonClick(e, arrOfFours[buttonNum - 1], buttonNum - 1)  
  }}>{buttonNum}</button>
  )

}

export default CarouselButton;