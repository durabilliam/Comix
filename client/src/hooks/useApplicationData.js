import {useEffect, useReducer} from 'react';
import dataReducer, {SET_APPLICATION_DATA} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
    const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      //superheros: [],
      comixs: [],
      loading: true,
    });
    useEffect(() => {
      const usersUrl = '/api/users';
      const comixsUrl = '/api/comixs';
      Promise.all([
        axios.get(usersUrl),
        axios.get(comixsUrl),
      ]).then((all) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          users: all[0].data,
          //superheros: all[1].data,
          comixs: all[1].data
        });
      })
        .catch((err) => console.log(err))
      //},[]);
      
    }, []);
  return {
      state,
      dispatch,
  };
};

export default useApplicationData;