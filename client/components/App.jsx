import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import PageCarouselButtons from './PageCarouselButtons.jsx';
import StarsAverage from './StarsAverage.jsx';
import Tabs from './Tabs.jsx';
import SortBy from './SortBy.jsx';
import Modal from './Modal.jsx';



function App() {
  const [data, setData] = useState([]);
  const [dataStars, setStarData] = useState([]);
  const [numOfReviews, setNum] = useState(0);
  const [numOfReviewsItem, setNumItems] = useState(0);
  const [reviewsByFour, setReviewsByFour] = useState([]);
  const [trackPageIndex, setPageIndex] = useState(0);
  const [tabSelected, selectTab] = useState(false);
  const [targetedReview, selectReview] = useState([]);
  const [modal, showModal] = useState(false);
  
  
    

  useEffect(() => {    
    fetch('/api/allReviews')
      .then((res) => {        
        return res.json();
      })
      .then((results) => {
        setNumItems(5)
        setNum(results.length)                          
        setData(results)
        setStarData(results);
        setReviewsByFour(results.slice(0, 4))
        setPageIndex(0);               
      })        
      .catch(error => {
        throw error;
      })  
             
  }, []); 
  
 
  
  const onPageNumberButtonClick = (e, fourReviews, index) => {    
    setReviewsByFour(fourReviews);
    setPageIndex(index);
    window.scrollTo({top: 0, behavior: 'smooth'});
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
    window.scrollTo({top: 0, behavior: 'smooth'});
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
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const onTabButtonClick = (e, itemId) => {   
    if (tabSelected === false) {    
      fetch(`/api/item/${itemId}`)  
        .then((res) => {
          return res.json()
        })
        .then((results) => {                                    
          setData(results)
          setReviewsByFour(results.slice(0, 4))
          setPageIndex(0);          
          setNumItems(results.length);
          selectTab(true);                 
        })
        .catch(error => {
          throw error;
        }) 
    }  
  };

  const onTabShowAllButtonClick = (e) => {
    if (tabSelected === true) {
      fetch('/api/allReviews')
      .then((res) => {        
        return res.json();
      })
      .then((results) => {
        setNumItems(5)
        setNum(results.length)                          
        setData(results)
        setStarData(results);
        setReviewsByFour(results.slice(0, 4))
        setPageIndex(0);
        selectTab(false);                      
      })        
      .catch(error => {
        throw error;
      })  
    }
  };

  const sortDataByDate = (data) => {
    let sortedDataByDate = data.sort((a, b) => {return new Date(b.date) - new Date(a.date)});    
    setData(sortedDataByDate);
    setReviewsByFour(sortedDataByDate.slice(0, 4))
  };

  const sortDataByRecommended = (data) => {
    let sortedDataByRecommended = data.sort((a, b) => {return b.helpful - a.helpful})      
    setData(sortedDataByRecommended);
    setReviewsByFour(sortedDataByRecommended.slice(0, 4));    
  };
  
  const sortByOnClick = (e, value, data) => {
    if (value === 'Recommended') {
      return sortDataByRecommended(data)
    }
    if (value === 'Newest') {
      return sortDataByDate(data)
    }
  };

  const onReviewPhotoClickActivateModal = (e, review) => {

    selectReview(review);
    showModal(true);
  }
  

    
    
  
  
  
  return (
    <div className="main-container">
      <div className="header">{numOfReviews + ' reviews '} <StarsAverage data={dataStars}/> </div>
      <Tabs tabClick={onTabButtonClick} showAllClick={onTabShowAllButtonClick} numReviews={numOfReviews} numReviewsItem={numOfReviewsItem}/>
      <SortBy data={data} sortByOnClick={sortByOnClick}/>
      <Modal modal={modal} review={targetedReview}/>
      <ReviewList reviews={reviewsByFour} onReviewPhotoClickActivateModal={onReviewPhotoClickActivateModal}/>
      <PageCarouselButtons data={data} onPageNumberButtonClick={onPageNumberButtonClick} index={trackPageIndex} 
      onNextPageButtonClick={onNextPageButtonClick} onBackPageButtonClick={onBackPageButtonClick} 
      />
    </div>
     
  )
  



}




export default App