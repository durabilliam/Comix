import React, { useState, useEffect } from "react";
import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Searchbar from './Searchbar'
import Results from './Results'

export default function Comix(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [term, setTerm] = useState("");
  const [dropDownFilter, setDropDownFilter] = useState('All');

  useEffect(() => {
    const comixList = `http://localhost:3001/api/comixs`
    axios.get(comixList).then(response => {
      setAllResults([...response.data])
      setResults([...response.data])
      console.log("OVER HERE", ...response.data)
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

  console.log ("OVER OVER HERE", results.title)
  const comixList = results.map(
    (comix, index) => (
      <div className='comix-container'>
        <a className='clickable-box' href={`/comixs/${comix.id}`}>
          <li className='comixs' href={`/comixs/${comix.id}`} key={`${comix.id}`}>
            <img src={comix.image} height="100" width="100" alt="comix"></img>
            <span>{comix.title}</span>
            <a>{comix.issue}</a>
          </li>
        </a>
      </div>))


  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
      <div className='comix-top'>
        <Searchbar onSearch={term => setTerm(term)} onDropDownChange={setDropDownFilter} />
        <Results results={results} />
        <h1 className='comixs-title'>Comixs</h1>
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
  );
};