import React, { useContext, useEffect, useState } from 'react'
import { RatesContext } from '../hoc/RatesProvider.jsx';
import { format } from '../utils/formatters.js'
import InputGroup from './InputGroup.jsx';
import Button from './UI/Button.jsx';
import  { getCountryCode } from '../utils/getCountryCode.js';
import '../assets/Form.css'

const Form = () => {
  const {rates, loading, error} = useContext(RatesContext);

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');

  const [countries, setCountries] = useState([]);
  const [countryCode1, setCountryCode1] = useState('us');
  const [countryCode2, setCountryCode2] = useState('ua');

  let arr = [];

  const getCountries = () => {
    fetch('./countries.json')
      .then(response => response.json())
      .then(data => setCountries(data.countries.country))
      .catch(error => console.error(error.message))
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates])

  const handleAmount1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(format(amount1));
  }

  const handleAmount2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(format(amount2));
  }

  const handleCurrency1Change = (currency1) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency1(currency1);
  }

  const handleCurrency2Change = (currency2) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency2(currency2);
  }

  useEffect(() => {    
    setCountryCode1(getCountryCode(countries, currency1));    
  }, [currency1]);

  useEffect(() => {    
    setCountryCode2(getCountryCode(countries, currency2));    
  }, [currency2]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (loading) return (
    <h2>wait please. loading...</h2>
  );
  if (error) return (
    <pre>{JSON.stringify(error.message, null, 2)}</pre>
  )

  return (
    <form onSubmit={handleSubmit} className="convert">
      <h2>Choose Curensies to Convert:</h2>
      <InputGroup
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)} 
        amount={amount1} 
        currency={currency1}
        countryCode={countryCode1} />

      <i className="fa fa-exchange fa-lg" ></i>

      <InputGroup
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)} 
        amount={amount2} 
        currency={currency2} 
        countryCode={countryCode2} />

      <Button type="submit">Convert</Button>
    </form>
  )
}

export default Form