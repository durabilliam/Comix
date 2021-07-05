import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import './Navbar.css'

const Logo = require('../Images/Issue-252.png').default


export default function ComixsNavbar(props) {
  const userLogout = () => {
    axios.post('/api/logout');
    localStorage.clear();
    window.location.href = '/login';
  }

  let user = localStorage.getItem('userObject');
  user = JSON.parse(user);
  //let user = 0
  if (!user) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <div className='logo'><img src={Logo} id='logopic' width="75em" /></div>
        </Navbar.Brand>
        <div id="rightNav">
          <Link to='/login'>Log In</Link>
          <br></br>
          <Link to='/register'>Sign Up</Link>
        </div>
      </Navbar>
    </div>
  )}
    else {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
          <div className='logo'><img src={Logo} id='logopic' width="75em" /></div>
          </Navbar.Brand>
              <div id="rightNav">
                <a>Thanks for Logging in {user.full_name}</a>
                {/* <a href={`/favourites`}><img src={favouriteStamp} className="favourite-image" height="25" width="50"></img></a> */}
                <a class="logout-button" onClick={userLogout}>Logout</a>
              </div>
            </Navbar>
        </div>
      )
    }
}