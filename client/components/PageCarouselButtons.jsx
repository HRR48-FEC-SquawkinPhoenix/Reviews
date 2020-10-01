import React, {useState, useEffect} from 'react';
import CarouselButton from './CarouselButton.jsx';

const PageCarouselButtons = ({data, index, onNextPageButtonClick, onPageNumberButtonClick, onBackPageButtonClick}) => {
  
  let buttonNum = 0;  
  let arrOfFours = [];

  const createIndexsOfFour = (data) => {               
    let copy = data.slice();
    let fourReviews = [];
    for (let i = 0; i < copy.length; i++) {
      fourReviews.push(copy[i]);
      if(fourReviews.length === 4) {
        arrOfFours.push(fourReviews);
        fourReviews = []
      }
    }
  }

  createIndexsOfFour(data);  
  
  
   
  
  
  return (    
    <div>
      <button onClick={(e) => {
        onBackPageButtonClick(e, arrOfFours[index -1], index -1);
      }}>Back</button>
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
      <button onClick={(e) => {
        onNextPageButtonClick(e, arrOfFours[index + 1], index + 1);
      }}>
        Next
        </button>
    </div>
  )
  //when we click on a button we want to slice at that group button 1 returns elements 0-3 buttons 2 returns elements 4-7
  //need to change the state in app.jsx (reviews by 4) 

  //how to make a button for every 4 reviews. 
}

export default PageCarouselButtons