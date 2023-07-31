import React from 'react';
import logo from '../Assets/logopay.png'
import{AiOutlineHome} from 'react-icons/ai'
import './Sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
        <div className="logoDiv flex">
            <img src={logo} alt="" />
        </div>
            <div className='menuDiv'>

                
                    <h3 className='divTitle'>Menu</h3>
                       
                    <ul className='menuList grid'>
                        <Link to = {'/dashboard '}>
                      <li className='listItem'>
                       <a href="#" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <span className='smallText'>
                        Home
                       </span>
                       </a>
                       </li>
                       </Link>
                       <Link to = {'/transactions'}>
                      <li className='listItem'>
                       <a href="#" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <span className='smallText'>
                        Transactions
                       </span>
                       </a>
                       </li>
                       </Link>
                       <Link to = {'/wallet'}>
                      <li className='listItem'>
                       <a href="#" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <span className='smallText'>
                        Wallet
                       </span>
                       </a>
                       </li>
                       </Link>
                      
                       <Link to = {'/goals'}>
                      <li className='listItem'>
                       <a href="#" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <span className='smallText'>
                        Goal
                       </span>
                       </a>
                       </li>
                       </Link>
                       
                     
                       <li className='listItem'>
                       <a href="#" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <span className='smallText'>
                        Profile
                       </span>
                       </a>
                       </li>
                       <li className='listItem'>
                       <a href="/login" className='menuLink flex'>
                       <AiOutlineHome className='icon'/>
                       <button type="submit" className="btn flex">  <span className='smallText'>
                        Logout
                       </span> </button>
                      
                       </a>
                       </li>
                     
                     


                    </ul>
                
            </div>

            <div className="sidebarCard">
            <AiOutlineHome className='icon'/>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having any Trouble?</p>

                <button className='btn'> Mail Us</button>
              </div>
            </div>
    </div>
  );
}

export default Sidebar;
