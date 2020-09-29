import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';

function App() {
  const [data, setData] = useState([])
  const [numOfReviews, setNum] = useState(0)
    

  useEffect(() => {    
    fetch('/api/allReviews')
      .then((res) => {        
        return res.json();
      })
      .then((results) => {
        setNum(results.length)                          
        setData(results)
      })        
      .catch(error => {
        throw error;
      })     
    
  }, [])
  
  
  
  return (
    <div>
      <div>{numOfReviews + ' reviews'}</div>
      <ReviewList reviews={data}/>
    </div>
     
  )
  



}




export default App