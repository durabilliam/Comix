import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Comix from './components/Comix'
import Comixs from './components/Comixs'
import Register from './components/Register';
import Login from './components/Login'
import Userpile from './components/Userpile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/api/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }


  render() {
    return (

      <div>
        <Router>
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/comixs' component={Comixs}/>
            <Route exact path='/comixs/:id' component={Comix} />
            <Route exact path='/userpile' component={Userpile} />
          </Switch>
        </Router>
      </div>
    );
  };
}
// return (<div className="App" >
//   <h1> This is Home </h1>

//   {/* <ul> {userList} </ul> */}
//   <ul> {comixList} </ul>
//   {/* <ul> {comicImage} </ul> */}

//   {/* <ul>{shname}</ul> */}
//   {/* <ul>{shimage}</ul> */}
// </div >
// );


export default App;
