import React, { useState } from 'react';
import './Register.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import image from '../../LoginAssets/mainpage.jpg';
import Logo from '../../LoginAssets/logopay.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      Password: password
    })
      .then((response) => {
        console.log('User has been created');
        // Check the response from the server
        if (response.data.error) {
          alert(response.data.error); // Display the error message
        } else {
          // Registration successful
          alert('User registered successfully!');
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        alert('An error occurred while registering user. Please try again.');
      });
  };

  return (
    <div className="registerpage flex">
      <div className="container flex">
        <div className="imgdiv">
          <img src={image} width={500} alt="mainpage" />
          <div className="footerDiv flex">
            <span className="text">Have an Account?</span>
            <Link to={'/'}>
              <button className="btn">Log in</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt="logopay" width={10} />
            <h3>Let Us Know You</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <button type="button" className="btn flex" onClick={createUser}>
              <span>Register </span>
            </button>
            <span className="forgotPassword">
              Forgot Your Password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
