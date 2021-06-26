import {useEffect, useReducer} from 'react';
import dataReducer, {SET_APPLICATION_DATA} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    tests: [],
    loading: true,
  });
  useEffect(() => {
    //const comicvineUrl = `/api/?${process.env.REACT_APP_KEY}/`;
    const comicvineUrl = `/api/volumes/?api_key=${process.env.REACT_APP_KEY}&format=json&sort=name:asc&filter=name:Walking%20Dead`;
    
    Promise.all([

      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded',
      axios.get(comicvineUrl, {withCredentials: true,}
      // {mode: 'no-cors', 
      // crossdomain: true,
      // responseType: 'json'
      //  },
      // ,{
      //headers: { 
      // 'x-apikey': `${process.env.REACT_API_KEY}`,
      //{"Access-Control-Allow-Origin": "*"}
      //},
      // crossdomain: true,
      // responseType: 'json'
      ),
    ]).then((all) => {
      console.log("XXXXX", all)
      dispatch({
        
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