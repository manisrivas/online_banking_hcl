import React from 'react';
import './Listing.scss'
import{AiOutlineHome} from 'react-icons/ai'
import {BiLogoVisa} from 'react-icons/bi'
import {FcSimCardChip} from 'react-icons/fc'
const Listing = () => {
  return (
    <div className='listingSection'>
   <div className="heading flex">
     <h1> My Cards</h1>
     <button className='btn flex'>
     <AiOutlineHome className = 'icon'/> 
     </button>
    </div>      
   <div className="secContainer flex">
     <div className="singleItem">
      <BiLogoVisa className = 'icon'/>
      <FcSimCardChip className = 'icon-1'/>
      
      <h3 className='num'>xxxx xxxx xxxx 12</h3>

      <h3 className="exp"> 00/00</h3>
      
      
     </div>
     <div className="singleItem">
      <BiLogoVisa className = 'icon'/>
      <FcSimCardChip className = 'icon-1'/>
      
      <h3 className='num'>xxxx xxxx xxxx 12</h3>

      <h3 className="exp"> 00/00</h3>
      
      
     </div>
     
     <div className="singleItem">
      <BiLogoVisa className = 'icon'/>
      <FcSimCardChip className = 'icon-1'/>
      
      <h3 className='num'>xxxx xxxx xxxx 12</h3>

      <h3 className="exp"> 00/00</h3>
      
      
     </div>
   </div>
   
  
  
   


    </div>
  );
}

export default Listing;
