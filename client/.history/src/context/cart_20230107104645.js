import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const CartProvider = ( { children } ) =>
{
  const [ values, setValues ] = useState( {
    keyword: "",
    results: []
  } );


  return (
    < CartContext.Provider value={ [ values, setValues ] }>
      { children }
    </ CartContext.Provider>
  );
};

const useSearch = () => useContext( CartContext );

export { useCart, SearchProvider };