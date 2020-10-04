import React, {useState, useEffect} from 'react';
import CarouselButton from './CarouselButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const PageCarouselButtons = ({data, index, onNextPageButtonClick, onPageNumberButtonClick, onBackPageButtonClick}) => {
  
  let buttonNum = 0;  
  let arrOfFours = [];

  const createIndexsOfFour = (data) => {
    let fourReviews = [];
    for (let i = 0; i < data.length; i++) {
      fourReviews.push(data[i]);
      if (fourReviews.length === 4) {
        arrOfFours.push(fourReviews);
        fourReviews = [];
      }        
    }
    if (fourReviews.length) {
      arrOfFours.push(fourReviews);   
    }
  }

  createIndexsOfFour(data);  
    
  
  return (    
    <div>
      <button className="next-back-btn" 
      onClick={(e) => {onBackPageButtonClick(e, arrOfFours[index -1], index -1);}}
      >
        <FontAwesomeIcon icon ={faArrowLeft} />
      </button>
      {arrOfFours.map((pageButtons) => {          
        ++buttonNum;
        return <CarouselButton
          onPageNumberButtonClick={onPageNumberButtonClick}
          arrOfFours = {arrOfFours}
          pageButtons={pageButtons}
          buttonNum={buttonNum}
          key={buttonNum}
        />
      })}
      <button className="next-back-btn"
        onClick={(e) => {onNextPageButtonClick(e, arrOfFours[index + 1], index + 1);}}
      >
        <FontAwesomeIcon icon ={faArrowRight} />
      </button>
    </div>
  )
  //when we click on a button we want to slice at that group button 1 returns elements 0-3 buttons 2 returns elements 4-7
  //need to change the state in app.jsx (reviews by 4) 

  //how to make a button for every 4 reviews. 
}

export default PageCarouselButtons