import React, { useEffect, useState } from 'react'
import { format } from '../utils/formatters.js'
import InputGroup from './InputGroup.jsx';
import Button from './UI/Button.jsx';

const Form = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/1d7578694ef7606402b7f942/latest/USD')
    .then(response => response.json())
    .then(data => setRates(data.conversion_rates))
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

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="convert">
      <InputGroup
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)} 
        amount={amount1} 
        currency={currency1} />

      <InputGroup
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)} 
        amount={amount2} 
        currency={currency2} />

      <Button type="submit">Convert</Button>
    </form>
  )
}

export default Form