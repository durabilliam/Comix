import {useEffect, useReducer} from 'react';
import dataReducer, {SET_APPLICATION_DATA} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    tests: [],
    loading: true,
  });
  useEffect(() => {
    const comicvineUrl = `/api/${process.env.REACT_APP_KEY}/`;
    
    Promise.all([

      
      axios.get(comicvineUrl,{
      headers: { 
      //'x-apikey': API_KEY,
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