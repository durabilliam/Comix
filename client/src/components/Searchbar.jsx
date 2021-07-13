import React, { useState, useEffect, useCallback  } from 'react'
import useDebounce from "../hooks/useDebounce";
import useApplicationData from '../hooks/useApplicationData'
//import './Searchbar.css'

export default function Searchbar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const { state, dispatch } = useApplicationData();
  const [dropSelect, setDropSelect] = useState('All')
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
  <div>
    <div id='comix-searchbar'>
    <select id='selUser'  
            value={dropSelect} 
            onChange={(evt) => {
            props.onDropDownChange(evt.target.value)
            setDropSelect(evt.target.value)
            }}>

      <option value='All'>Search by</option> 
      <option value='Publisher'>Publisher</option> 
      <option value='Title'>Title</option> 
    </select>
    
    <form onSubmit={event => event.preventDefault()}>
      <input 
        type='text' 
        placeholder='Search Parameter'
        id='input_field' 
        name="search"
        value={value}
        spellCheck="false"
        onChange={event => setValue(event.target.value.toLowerCase())}
        />
    </form>
    <div id='result'></div>
  </div>
  </div>
  )
};