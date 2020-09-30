import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import PageCarouselButtons from './PageCarouselButtons.jsx';

function App() {
  const [data, setData] = useState([])
  const [numOfReviews, setNum] = useState(0)
  const [reviewsByFour, setReviewsByFour] = useState([])
    

  useEffect(() => {    
    fetch('/api/allReviews')
      .then((res) => {        
        return res.json();
      })
      .then((results) => {
        setNum(results.length)                          
        setData(results)
        setReviewsByFour(results.slice(0, 4))
      })        
      .catch(error => {
        throw error;
      })  
             
  }, [])  

  const onPageNumberButtonClick = (e, fourReviews) => {
    console.log(fourReviews);
    setReviewsByFour(fourReviews)
  }
  
  
  return (
    <div>
      <div className="header">{numOfReviews + ' reviews'}</div>
      <ReviewList numOfButtons={numOfReviews} reviews={reviewsByFour} data={data}/>
      <PageCarouselButtons data={data} onPageNumberButtonClick={onPageNumberButtonClick}/>
    </div>
     
  )
  



}




export default App