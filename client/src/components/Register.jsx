import React, { Component }from 'react'
import axios from 'axios'
import ComixsNavbar from './Navbar';
//import './Register.css'



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation:'',
      errors:''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const {first_name, last_name, email, password, password_confirmation} = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('/api/users', {user})
    .then(response => {
      const user = {
        id: response.data.user.id,
        full_name: response.data.user.first_name + ' ' + response.data.user.last_name,
        email: response.data.user.email,
        token: response.data.token
      }

      localStorage.setItem('userObject', JSON.stringify(user));
      window.location.href = '/';

      console.log('response in regiser:', response)
      if (response.data.status === 'created') {
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
    const {first_name, last_name, email, password, password_confirmation} = this.state
    return (
      <div className='addRegister_background'>
        <ComixsNavbar />
        <form id='addRegisterForm' onSubmit={this.handleSubmit}>
          <input
          className = 'add-registerfield'
          placeholder="First Name"
          type="text"
          name="first_name"
          value={first_name}
          onChange={this.handleChange}
          />
          <input 
          className = 'add-registerfield'
          placeholder="Last Name"
          type="text"
          name="last_name"
          value={last_name}
          onChange={this.handleChange}
          />
          <input 
          className = 'add-registerfield'
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          />
          <input 
          className = 'add-registerfield'
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          />
          <input 
          className = 'add-registerfield'
          placeholder="Password Confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChange}
          />
          <button className = 'addRegisterSubmit' placeholder="submit" type="submit">Register</button>
        </form>
        <div className='spacer'></div>
        <div className='footer'>
        </div>
      </div>
    );
  }
}
export default Register;