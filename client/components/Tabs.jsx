import React from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';

const Tabs = (props) => {
  


  return (  
    <button onClick={props.tabClick}></button>
    
  )


};

export default Tabs

{/* <div>
    <TabBar
    activeIndex={0} 
    handleActiveIndexUpdate={props.tabClick}   
    >
      <Tab>
        <span className='mdc-tab__text-label'>hello</span>
      </Tab>
    </TabBar> 
    </div> */}