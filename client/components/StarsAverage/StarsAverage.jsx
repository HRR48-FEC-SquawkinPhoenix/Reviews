import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

const StarsAverage = ({data}) => {
  let totalStars = 0;
  
  for (let i = 0; i < data.length; i++) {
    totalStars += data[i].stars
  }
    
  let averageStars = (totalStars / data.length);  
  
  return (    
    <div className="totalStars">
      <Rating 
        initialRating={averageStars}
        readonly={true}   
        emptySymbol={<FontAwesomeIcon icon={farStar}/>}
        fullSymbol={<FontAwesomeIcon icon={faStar}/>}
        fractions={2}               
      />  
   </div>
  )
};

export default StarsAverage;