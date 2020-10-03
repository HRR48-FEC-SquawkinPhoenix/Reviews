import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import PageCarouselButtons from './PageCarouselButtons.jsx';
import StarsAverage from './StarsAverage.jsx';
import Tabs from './Tabs.jsx';


function App() {
  const [data, setData] = useState([]);
  const [numOfReviews, setNum] = useState(0);
  const [reviewsByFour, setReviewsByFour] = useState([]);
  const [trackPageIndex, setPageIndex] = useState(0);
  const [tabSelected, selectTab] = useState(0);
    

  useEffect(() => {    
    fetch('/api/allReviews')
      .then((res) => {        
        return res.json();
      })
      .then((results) => {
        setNum(results.length)                          
        setData(results)
        setReviewsByFour(results.slice(0, 4))
        setPageIndex(0);
        selectTab(0);
      })        
      .catch(error => {
        throw error;
      })  
             
  }, []); 
  
 
  
  const onPageNumberButtonClick = (e, fourReviews, index) => {    
    setReviewsByFour(fourReviews);
    setPageIndex(index);
  };  


  const onNextPageButtonClick = (e, fourReviews, index) => {
    let reviewSets = Math.ceil(data.length / 4);               
    if (index === reviewSets) {      
      setReviewsByFour(data.slice(0, 4));
      setPageIndex(0);
    } else {
    setReviewsByFour(fourReviews);
    setPageIndex(index);      
    }
  };
  
  const onBackPageButtonClick = (e, fourReviews, index) => {
    let reviewSets = Math.ceil(data.length / 4);     
    if(index === -1) {
      setReviewsByFour(data.slice(data.length - 4));
      setPageIndex(reviewSets);
    } else {
      setReviewsByFour(fourReviews);
      setPageIndex(index);
    }  
  }

  const onTabButtonClick = (e, itemName) => {   
    if (tabSelected === 0) {
      fetch(`/api/${itemName}`)  
        .then((res) => {
          return res.json()
        })
        .then((results) => {
          setNum(results.length)                          
          setData(results)
          setReviewsByFour(results.slice(0, 4))
          setPageIndex(0);
          selectTab(1);
        })
        .catch(error => {
          throw error;
        }) 
    } else if (tabSelected === 1) {
        fetch('/api/allReviews')  
          .then((res) => {
            return res.json()
          })
          .then((results) => {
            setNum(results.length)                          
            setData(results)
            setReviewsByFour(results.slice(0, 4))
            setPageIndex(0);
            selectTab(0);
          })
          .catch(error => {
            throw error;
          }) 
    } 
    
  }
  
  
  return (
    <div>
      <div className="header">{numOfReviews + ' reviews '} <StarsAverage data={data}/> </div>
      <Tabs tabClick={onTabButtonClick}/>
      <ReviewList numOfButtons={numOfReviews} reviews={reviewsByFour} data={data}/>
      <PageCarouselButtons data={data} onPageNumberButtonClick={onPageNumberButtonClick} index={trackPageIndex} 
      onNextPageButtonClick={onNextPageButtonClick} onBackPageButtonClick={onBackPageButtonClick} 
      />
    </div>
     
  )
  



}




export default App