import React from 'react'
import axios from 'axios'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import ComixsNavbar from './Navbar';
//import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state
    let user = {
      email: email,
      password: password
    }

    axios.post('/api/login', {user}, {withCredentials: true})
    .then(response => {
      const user = {
        id: response.data.user.id,
        full_name: response.data.user.first_name + ' ' + response.data.user.last_name,
        email: response.data.user.email,
        token: response.data.token
      }
      
      localStorage.setItem('userObject', JSON.stringify(user));
      window.location.href = '/';

      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
  redirect = () => {
    this.props.history.push('/')
  }
  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
  render(){
    const {email, password} = this.state
    
    return(
      <div className='addLogin_background'>
        <ComixsNavbar />
        <div>
        <form id='addLoginForm' onSubmit={this.handleSubmit}>
          <input
            className = 'addloginfield'
            placeholder='email'
            type="text"
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            className = 'addloginfield'
            placeholder='password'
            type="password"
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button className= 'addLoginSubmit' placeholder='submit' type='submit'>Log In</button>
          <div className= 'redirect-register'>or <Link to='/register'>Register</Link></div>
        </form>
        <div className='spacer'></div>
        </div>
        <div className='footer'>
        </div>
      </div>
    );
  }
}

export default Login;