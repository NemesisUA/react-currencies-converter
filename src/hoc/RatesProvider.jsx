import React, { createContext, useState, useEffect } from 'react';

export const RatesContext = createContext(); 

export const RatesProvider = ({ children }) => {
  const [uri, setUri] = useState(
    'https://v6.exchangerate-api.com/v6/1d7578694ef7606402b7f942/latest/USD');

  const [rates, setRates] = useState([])  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(uri)
      .then(resp => resp.json())
      .then(data => setRates(data.conversion_rates))
      .then(setLoading(false))
      .catch(setError)
  }, [uri])

  const value = {rates, loading, error}
  
  return (
    <RatesContext.Provider value={value}>
      {children}
    </RatesContext.Provider>
  )
}
