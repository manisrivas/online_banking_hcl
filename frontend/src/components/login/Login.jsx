import React, { createContext, useEffect, useState } from 'react';
import './Login.css';

import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../LoginAssets/mainpage.jpg';
import Logo from '../../LoginAssets/logopay.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');
  const [username, setUsername] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    })
      .then((response) => {
        console.log(response);
        const username =  response.data.username
        localStorage.setItem("LoginUserName",username);
        if (response.data.message) {
          navigateTo('/');
          setLoginStatus('credentials do not exist' || loginUserName === '' || loginPassword === '');
        } else {
          navigateTo('/dashboard');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setLoginStatus('Incorrect password');
        } else {
          setLoginStatus('An error occurred');
        }
      });
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage');
      setTimeout(() => {
        setStatusHolder('message');
        setLoginStatus('');
      }, 4000);
    }
  }, [loginStatus]);

  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');


    
  };

  return (
    <div className="loginpage flex">
      <div className="container flex">
        <div className="imgdiv">
          <img src={image} width={500} alt="Main Page" />
          <div className="footerDiv flex">
            <span className="text">Don't Have an Account?</span>
            <Link to={'/register'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} width={10} alt="Logo" />
            <h3>Welcome Back</h3>
          </div>
          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inptDiv">
              <label htmlFor="username">Username</label>
              <div className="inpt flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inptDiv">
              <label htmlFor="password">Password</label>
              <div className="inpt flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Log In</span>
            </button>
            <a href="/dashboard">Dashboard</a>
            <span className="forgotPassword">
              Forgot Your Password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
