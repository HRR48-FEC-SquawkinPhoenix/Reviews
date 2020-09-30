import React, {useState, useEffect} from 'react';
import CarouselButton from './CarouselButton.jsx';

const PageCarouselButtons = (props) => {
  
  let buttonNum = 0;  
  let arrOfFours = [];

  const createIndexsOfFour = (data) => {    
    let fourReviews = [];
    let count = 0;
    for(let i = 0; i < data.length; i++) {
      if (count <= 3) {
        fourReviews.push(data[i]);
        count++;
      } else {
        arrOfFours.push(fourReviews)
        fourReviews = [];
        count = 0;
      }       
    }    
  }

  createIndexsOfFour(props.data);
  console.log(arrOfFours);
  
  return (    
    <div>
      <button>Back</button>
      {arrOfFours.map((pageButtons) => {          
        ++buttonNum;
        return <CarouselButton
        onPageNumberButtonClick={props.onPageNumberButtonClick}
        arrOfFours = {arrOfFours}
        pageButtons={pageButtons}
        buttonNum={buttonNum}
        key={buttonNum}
        />
      })}
      <button>Next</button>
    </div>
  )
  //when we click on a button we want to slice at that group button 1 returns elements 0-3 buttons 2 returns elements 4-7
  //need to change the state in app.jsx (reviews by 4) 

  //how to make a button for every 4 reviews. 
}

export default PageCarouselButtons