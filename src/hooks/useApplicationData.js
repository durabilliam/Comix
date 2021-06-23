import {useEffect, useReducer} from 'react';
import dataReducer, {SET_APPLICATION_DATA} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    tests: [],
    loading: true,
  });
  useEffect(() => {
    const comicvineUrl = `https://comicvine.gamespot.com/api`
    //const comicvineUrl = `https://comicvine.gamespot.com/api/allow-cors?api_key=75ba9b263df0ad5220aef3c1c8dbf897064f9116`
    //const comicvineUrl = `https://comicvine.gamespot.com/api/?api_key=${key}&format=json&field_list=aliases,deck,description,first_appeared_in_issue,image,real_name,name,id,publisher&limit=1&offset=`;

    Promise.all([




      
      axios.get(comicvineUrl,{
      headers: { 
      'x-apikey': '75ba9b263df0ad5220aef3c1c8dbf897064f9116',
      "Access-Control-Allow-Origin": "*"  
      },
      crossdomain: true,
      responseType: 'json'
      }),
    ]).then((all) => {console.log("XXXXX", all)
      dispatch({
        headers: {"Access-Control-Allow-Origin": "*"},
        type: SET_APPLICATION_DATA,
        tests: all[0].data,
      });
    })
      .catch((err) => console.log(err))
    }, []);
  
  return {
    state,
    dispatch,
  };
};

export default useApplicationData;