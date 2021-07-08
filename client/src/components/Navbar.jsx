import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import './Navbar.css'

const Logo = require('../Images/Issue-252.png').default
const Supes = require('../Images/superman.png').default
const Spidey = require('../Images/spider-man.png').default
const Spawn = require('../Images/spawn.png').default
const Other = require('../Images/other.png').default




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
        <div classname='supes'><img src={Supes} id='supes' height="100em"/></div>
        <div classname='spidey'><img src={Spidey} id='spidey' height="100em"/></div>
        <div classname='spawn'><img src={Spawn} id='spawn' height="100em"/></div>
        <div classname='other'><img src={Other} id='other' height="100em"/></div>
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
          <div id="topNav">
          <div id="publishers">
            <div classname='supes'><img src={Supes} id='supes' height="100em"/></div>
            <div classname='spidey'><img src={Spidey} id='spidey' height="100em"/></div>
            <div classname='spawn'><img src={Spawn} id='spawn' height="100em"/></div>
            <div classname='other'><img src={Other} id='other' height="100em"/></div>
          </div>
          <div id="rightNav">
             <a>Thanks for Logging in {user.full_name}</a>
             <br></br>
             {/* <a href={`/favourites`}><img src={favouriteStamp} className="favourite-image" height="25" width="50"></img></a> */}
             <a class="logout-button" onClick={userLogout}>Logout</a>
          </div>
          </div>
          </Navbar>
        </div>
      )
    }
}