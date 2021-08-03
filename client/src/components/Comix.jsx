import React, { useState, setState, useReducer, reset, useEffect } from "react";
import axios from 'axios'
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
// import {
//   UPDATE_FAVOURITE_DATA, UPDATE_COMMENT_DATA, UPDATE_LIKES_DATA
// } from '../reducer/data_reducer';
import { UPDATE_CART_DATA } from '../reducer/data_reducer'
import { useParams, Link } from "react-router-dom";
import './Comix.css'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Comix(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  const comix_id = id;

  let addToCartButton
  //let favouriteImage

  let user = localStorage.getItem('userObject');
  console.log("USER", user)
  if (!user) {
    console.log("i'm null")
  } else {
    user = JSON.parse(user);
    const comix_id = id;
    const user_id = user.id;

    if (user.id) {
      console.log("logged IN user id", user_id,"comix id", comix_id)
    }

   
    const usercart = state.carts.find(d => d.user_id == user_id && d.comix_id == id)
    const comixsold = state.carts.find(d => d.comix_id == id)

    const handleClick = (event) => {
      console.log("I FIRED")
      event.preventDefault()
      if (usercart) {
        console.log("already in Comix Stack")
      } else {
        let cart = {
          user_id: user_id,
          comix_id: id
        }
        axios.post('/api/carts', { cart })
          .then(response => {
            dispatch({
              type: UPDATE_CART_DATA,
              carts: response.data.cart
            })
            window.location.href = '/userpile';
          })
          .catch(error => console.log('api errors:', error))
      }
    };  
  

    if (usercart) {
      addToCartButton = <div></div>
    } else if (user) {
      addToCartButton = <button onClick={handleClick} id="cart" type="button" className="btn btn-danger btn">Add to Comixs Pile!!</button>
    } else addToCartButton = <div></div>


  };




  const ind_comix = state.comixs.find(d => d.id == id)
  if (!ind_comix) {
    return null
  }
  const {
    title,
    issue,
    edition,
    Price,
    Available,
    Grade,
    quantity,
    image
  } = { ...ind_comix }

  const comixTitle = (<span>{title}</span>)
  const comixIssue = (<span>{issue}</span>)
  const comixEdition = (<span>{edition}</span>)
  const comixPrice = (<span>{Price}</span>)
  const comixAvailable = (<span>{Available}</span>)
  const comixGrade = (<span>{Grade}</span>)
  //const comixQuantity = (<span>{quantity}</span>)
  const comixImage = (<div className="comix-image"><img src={image} className="comix-image1" width="300"></img></div>);
  //const comixList = state.comixs.map((comix) => (<li key={comix.id} > {comix.title} {comix.issue} {comix.edition} <img src={comix.image} height="150" width="125" alt="comic"></img> </li>));

  //let Xquantity = quantity - 1
  let prevButton;
  let nextButton;
  const nid = Number(id)

  let prevUrl = `/comixs/${nid - 1}`
  let nextUrl = `/comixs/${nid + 1}`


  if (nid === 0) {
    prevButton = <div></div>
  } else {
    prevButton = <Link to={prevUrl}><button type="button" className="btn btn-light btn">Previous</button></Link>
  };


  if (nid === state.comixs.length - 1) {
    nextButton = <div></div>
  } else {
    nextButton = <Link to={nextUrl}><button type="button" className="btn btn-light btn">Next</button></Link>
  };



  const comixsold = state.carts.find(d => d.comix_id == id)
  let comixQuantity
  let noOfComixs
  if (comixsold){
      noOfComixs = quantity -1
  } else {
      noOfComixs = quantity
  }

  if (noOfComixs < 1) {
    comixQuantity = (<div id="soldout"> SOLD OUT!!!</div>)
  } else {
    comixQuantity = (<div>Number in Stock: {noOfComixs}</div>)
  }

  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
      <div className="color-overlay">
        <div className="temp-comix-card">
          <div className="card-image">
            <div>{comixImage}</div>
            <div className="pager">
              {prevButton}
              {nextButton}
            </div>
          </div>
          <div className="comix-card">
            <div className="right-card">
              <h1 className="comix-name">{comixTitle}</h1>
              <h2 className="card-text"> Issue #: {comixIssue}, {comixEdition} Edition </h2>
              <h3> Price CAD: {comixPrice} </h3>
              <h3> Approximate Grade: {comixGrade} </h3>
              <h3> {comixQuantity} </h3>
              <div>
                {addToCartButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  
};