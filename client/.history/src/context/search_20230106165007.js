import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const SearchContext = createContext();

const SearchProvider = ( { children } ) =>
{
  const [ values, setValues ] = useState( {
    keyword: "",
    results: []
  } );

  //axios config
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common[ 'Authorization' ] = auth?.token;

  return (
    < SearchContext.Provider value={ [ values, setValues ] }>
      { children }
    </ SearchContext.Provider>
  );
};

const useSearch = () => useContext( SearchContext );

export { useSearch, SearchContext };