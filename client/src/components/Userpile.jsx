import React from 'react'
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import "./Userpile.css"

export default function Userpile(props) {
  const { state, dispatch } = useApplicationData();
  let user = localStorage.getItem('userObject');
  user = JSON.parse(user);
  const user_id = user.id;
  const userComixs = state.carts.filter(cart => cart.user_id == user_id)
  const userComixsId = userComixs.map(comix => comix.comix_id)

  let userComixsList = []
  for (let i = 0; i < userComixsId.length; i++) {
    userComixsList.push(state.comixs.find(res => res.id == userComixsId[i]))
  }
  console.log("user comics list", userComixsList)
  let userCount = userComixsList.length
  let userPrices = userComixsList.map(comix => Number((comix.Price).replace('$', '')))
  let comixCost = userPrices.reduce((a, b) => a + b, 0)

  let shippingCost
  if(userCount <= 3){
    shippingCost = 8
  } else if (userCount > 3 && userCount <=6){
    shippingCost = 16
  } else if (userCount > 6 && userCount <=14){
    shippingCost = 22
  } else if (userCount > 14 && userCount <= 25){
    shippingCost = 27
  } else {
    shippingCost = 35
  }

  let shippingMethod
  if(userCount <= 3){
    shippingMethod = "--1 LetterMail Envelope"
  } else if (userCount > 3 && userCount <=6){
    shippingMethod =  "--2 LetterMail Envelope"
  } else if (userCount > 6 && userCount <=14){
    shippingMethod = "--1 Small Tracked Box"
  } else if (userCount > 14 && userCount <= 25){
    shippingMethod = "--1 Medium Tracked Box"
  } else {
    shippingMethod = "--1 Large Tracked Box"
  }

  let totalCost = comixCost + shippingCost
  //let order = [...userComixList]
  const handleClick = (event) => {
    console.log("Order Button FIRED")
    console.log("user comics list", userComixsList)
    event.preventDefault()
    //let order = [...userComixList]
    //let order = userComixList.map(a => ({...a}));
    //let order = JSON.parse(JSON.stringify(userComixList));
    // let order = [];
    // for (var i of userComixList) {
    //   order.push(i);
    // }
    let order = userComixList.slice(0);
    console.log("order", order)
  //   if (usercart) {
  //     console.log("already in Comix Stack")
  //   } else {
  //     let cart = {
  //       user_id: user_id,
  //       comix_id: id
  //     }
  //     axios.post('/api/carts', { cart })
  //       .then(response => {
  //         dispatch({
  //           type: UPDATE_CART_DATA,
  //           carts: response.data.cart
  //         })
  //         window.location.href = '/userpile';
  //       })
  //       .catch(error => console.log('api errors:', error))
  //   }
  };  

  let placeOrderButton
  // if (usercart) {
  //   addToCartButton = <div></div>
  // } else if (user) {
  placeOrderButton = <button onClick={handleClick} id="order" type="button" className="btn btn-danger btn">Place Your Order!!</button>
  //} else addToCartButton = <div></div>



  
  const userComixList = userComixsList.map(
    (comix) => (
      <div className='comix-container'>
        <a className='clickable-box' href={`/comixs/${comix.id}`}>
          <li className='comixs' href={`/comixs/${comix.id}`} key={`${comix.id}`}>
            <img src={comix.image} width="100" alt="comix"></img>
            <div className='box-title'>
              <h4>{comix.title}</h4>
              <h4>#{comix.issue}</h4>
              <h4>Price CAD: {comix.Price}</h4>
            </div>
          </li>
        </a>
      </div>));

  const userTableList =
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Issue</th>
          <th>Cover</th>
          <th>Price ($CAD)</th>
        </tr>
        {userComixsList.map(
          (comix) => (
            <tr>
              <td>{comix.title}</td>
              <td>#{comix.issue}</td>
              <td><img src={comix.image} width="50" alt="comix"></img></td>
              <td>{comix.Price}</td>
            </tr>))}
      </table>
      {placeOrderButton}
    </div>

  







  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
      <div className="color-overlay">
        <div className='comix-top'>
          <h1 className='comixs-title'>{user.full_name}'s Comic Cart</h1>
        </div>
        <div className="comix-tables">
          {userTableList}
          <div className="total-cost">
            <table>
              <th>Description</th>
              <th>Price ($CAD)</th>
            <tr>
            {userCount > 1 ? (
              <td>Subtotal for {userCount} items:</td>
            ) : (
              <td>Subtotal for {userCount} item:</td>
            )}
              <td>${comixCost}.00</td>
            </tr>
            <tr>
              <td>Shipping for {userCount} books {shippingMethod}</td>
              <td>${shippingCost}.00</td>
            </tr>
             <tr>
              <td>Total Cost:</td>
              <td>${totalCost}.00</td>
            </tr>
            </table>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  </div>
  );
};