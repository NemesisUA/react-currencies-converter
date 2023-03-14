import React, { useContext} from 'react'
import { RatesContext } from '../../hoc/RatesProvider'
import { format } from '../../utils/formatters'
import '../../assets/HeaderRates.css'

const HeaderRate = ({ currency, countryCode }) => {
  const {rates, loading, error} = useContext(RatesContext);  

  if (loading) return (
    <span>loading...</span>
  );
  if (error) return (
    <span></span>
  )

  return (
    <div className='header__current-rates'>
      <span className={`fi fi-${countryCode}`}></span>
      <p>
        {`1 ${currency} = `}
        <span className='value'>
          {format(rates['UAH'] / rates[currency] || '')}
        </span>
        {` UAH`}
      </p>
    </div>
  )
}

export default HeaderRate