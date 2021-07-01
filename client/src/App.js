import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Comix from './components/Comix'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, Component } from 'react';

class App extends Component {

  
  
  render() {
    return (
      
      <div>
        <Router>
          <Switch>
            {/* <BurgerNavbar /> */}
            {/* <ul> {userList} </ul>
            <ul> {extburgerList} </ul> */}
            {/* <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/burgers' component={Burgers}/>
            <Route exact path='/restaurants' component={Restaurants}/> */}
            <Route exact path='/comixs/:id' component={Comix}/>
            {/* <Route exact path='/restaurants/restaurant/:id/:lat/:long' component={Restaurant}/>
            <Route exact path='/favourites' component={Favourites}/>
            <Route exact path='/search' component={Searchbar}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/addBurger' component={AddBurger}/> */}

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
