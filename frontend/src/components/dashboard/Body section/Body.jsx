import React from 'react';
import Top from './Top Section/Top';
import Listing from './Listing/Listing';
import Activity from './Activity Section/Activity'
import  './body.scss'
const Body = () => {
  return (
    <div className='mainContent'>
    <Top/>

    <div className='bottom flex'>
    <Listing/>
    <Activity/>
    </div>
    </div>
  );
}

export default Body;
