import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import '../assets/InputGroup.css'

const InputGroup = ( props ) => {
  const { amount, currency, 
    currencies, countryCode,
    onAmountChange, onCurrencyChange } = props;

  
  return (
    <div className="convert__group">
        <span 
          className={`fi fi-${countryCode}`}>
        </span>

        <input 
          value={amount || 1} 
          onChange={e => onAmountChange(+e.target.value)} 
          className="convert__input" 
          type="number" />
          
        <select 
          value={currency || 'usd'}
          onChange={e => onCurrencyChange(e.target.value)}
          className="convert__select">
            {
              currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))
            }
        </select>
    </div>
  )
}

InputGroup.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func
}

export default InputGroup