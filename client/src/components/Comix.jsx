import React, { useState, setState, useReducer, reset, useEffect } from "react";
import axios from 'axios'
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
// import {
//   UPDATE_FAVOURITE_DATA, UPDATE_COMMENT_DATA, UPDATE_LIKES_DATA
// } from '../reducer/data_reducer';
import { useParams } from "react-router-dom";
import './Comix.css'


export default function Comix(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  console.log("XXXX", state)
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
  let comixQuantity
  if (quantity < 1) {
    comixQuantity = (<span> SOLD OUT!!!</span>)
  } else {
    comixQuantity = (<span>{quantity}</span>)
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
          </div>
          <div className="comix-card">
            <div className="right-card">
              <h1 className="comix-name">{comixTitle}</h1>
              <h2 className="card-text"> Issue #: {comixIssue}, {comixEdition} Edition </h2>
              <h3> Price CAD: {comixPrice} </h3>
              <h3> Approximate Grade: {comixGrade} </h3>
              <h3> No. Available: {comixQuantity} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );



  // let burgerType
  // if (isVegetarian) {
  //   burgerType = (<a><img src={vegetarianStamp} class="favourite-image" height="50" width="50"></img></a>)
  // } else {
  //   burgerType = <div></div>
  // }

  //           <div className="like-dislike-burger">
  //             <div className="fav-button">
  //               {favouritesButton}
  //               {favouriteImage}
  //             </div>
  //             <div className='likeDislike'>
  //               <div className='likes'>
  //                 <button onClick={likeHandleClick} type="like-button" className="btn btn-success btn-sm">Great!!</button>
  //                 {likesForPage}
  //               </div>
  //               <div classNames='dislikes'>
  //                 <button onClick={dislikeHandleClick} type="dis-like-button" className="btn btn-danger btn-sm">Nasty!!</button>
  //                 {dislikesForPage}
  //               </div>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="burgername">
  //     </div>

  //     <div className="main-content">
  //       <div className="left-main">
  //         <section>
  //           {commentsForPage}
  //         </section>
  //       </div>
  //       <div className="right-main">
  //         <section className="website-info">
  //           <div className="website-info-styling">
  //             <div className="address_head">
  //               {burgerRestaurantBrand}
  //               {burgerRestaurant}
  //             </div>
  //             <div className="address_body">
  //               {burgerRestaurantWeb}
  //               {burgerAddress}
  //             </div>
  //           </div>
  //         </section>

  //         <form className="comment-form"
  //           onSubmit={handleSubmit}
  //           action="submit"
  //           name="comment-form"
  //           id="comment-form">
  //           <textarea
  //             id="burger-comments"
  //             form="commentform"
  //             name="burger-comments"
  //             rows="4"
  //             cols="50"
  //             required>
  //           </textarea>
  //           <p>Comment</p>
  //           <div className="form-name mb-4">
  //             <input
  //               type="text"
  //               id="name-comments"
  //               form="commentform"
  //               cols="50"
  //               required />
  //             <p>Enter Your Name</p>
  //           </div>
  //           <button type="comment-button" className="btn btn-primary btn-sm">
  //             Post comment
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //     <SocialFollow />
  //   </div>
  // )

};