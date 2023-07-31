import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Dashboard.scss';
import Body from './Body section/Body'
import Sidebar from './Sidebar/Sidebar'
import Goals from './goals/goals'
import Transactions from './transactions/transactions'

const Dashboard = (props) => {
  console.log("props are ",localStorage.getItem("username_bro"));
  return (
    <div className='container'>
      
          <Sidebar />
          <Body />
        
       
    </div>
  );
};

export default Dashboard;
