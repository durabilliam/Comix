import React, { useState, useEffect } from "react";
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Searchbar from './Searchbar'
import Results from './Results'
import './Comixs.css'

export default function Comixs(props) {
  const { state, dispatch } = useApplicationData();
  // const { id } = useParams();
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [term, setTerm] = useState("");
  const [dropDownFilter, setDropDownFilter] = useState('All');

  useEffect(() => {
    const comixList = `http://localhost:3001/api/comixs`
    axios.get(comixList).then(response => {
      setAllResults([...response.data])
      setResults([...response.data])
    });
  }, [])

  useEffect(() => {
    if (dropDownFilter === 'All') {
      const newResults = allResults
      setResults(newResults)
    } else if (dropDownFilter === 'Publisher') {
      const newResults = allResults.filter(comix => comix.Publisher.toLowerCase().includes(term))
      setResults(newResults)
    } else if (dropDownFilter === 'Title') {
      const newResults = allResults.filter(comix => comix.title.toLowerCase().includes(term))
      setResults(newResults)
    }
  }, [term, dropDownFilter])

  
  // let testComixId = state.comixs.map(comix => comix.id)
  // console.log("Comix ID's", testComixId)
  // let testComixsSold = state.carts.map(comix => comix.comix_id)
  // console.log("Comix Sold", testComixsSold)
  
  // const comixsold = state.carts.find(d => d.comix_id == testComixId)
  // console.log("Comic ID Purchased", comixsold)
  // let comixQuantity 
  // let noOfComixs  = results.map(comix => comix.quantity)
  // console.log("Number In Stock XX", noOfComixs)
  // if (testComixId === testComixsSold ){
  //     noOfComixs = noOfComixs - 1
  // }
  // console.log("Number In Stock XXXX", noOfComixs)
  // if (noOfComixs < 1) {
  //   comixQuantity = (<div id="soldout"> SOLD OUT!!!</div>)
  // } else {
  //   comixQuantity = (<div>Number in Stock: {noOfComixs}</div>)
  // }
  // console.log("Number In Stock", {comixQuantity})
  // console.log("State Quantity", state.quantity)

  const comixList = results.map(
    (comix) => (
      <div className='comix-container'>
        <a className='clickable-box' href={`/comixs/${comix.id}`}>
          <li className='comixs' href={`/comixs/${comix.id}`} key={`${comix.id}`}>
            <img src={comix.image} width="100" alt="comix"></img>
            <div className = 'box-title'>
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
          <Searchbar onSearch={term => setTerm(term)} onDropDownChange={setDropDownFilter} />
          <Results results={results} />
          <h1 className='comixs-title'>Comic Book List</h1>
        </div>
        <div class="comixlist">
          <section>
            <div className='comixs-list'>
              {comixList}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
};