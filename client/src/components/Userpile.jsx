import React from 'react'
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'

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
  
  
  let userPrices = userComixsList.map(comix => Number((comix.Price).replace('$','')))
  let totalCost = userPrices.reduce((a, b) => a + b, 0)
  console.log("here", userPrices)
  console.log("here2", totalCost)



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
      </div>))
  
  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
      <div className="color-overlay">
        <div className='comix-top'>
          <h1 className='comixs-title'>{user.full_name}'s Comic Cart</h1>
        </div>
        <div class="comixlist">
          <section>
            <div className='comixs-list'>
              {userComixList}
            </div>
          </section>
          <div font-size="20px">
            ${userPrices}.00
            ${totalCost}.00
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};