import React from 'react'
import { PropTypes } from 'prop-types'

const InputGroup = ( props ) => {
  const { amount, currency, currencies, 
    onAmountChange, onCurrencyChange } = props;

  return (
    <div className="convert__group">

        <input 
          value={amount || 1} 
          onChange={e => onAmountChange(+e.target.value)} 
          className="convert__input" 
          type="number" min={1} />
          
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