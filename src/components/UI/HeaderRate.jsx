import React, { useContext} from 'react'
import { RatesContext } from '../../hoc/RatesProvider'
import { format } from '../../utils/formatters'

const HeaderRate = ({ currency }) => {
  const {rates, loading, error} = useContext(RatesContext);

  if (loading) return (
    <span>loading...</span>
  );
  if (error) return (
    <span></span>
  )

  return (
    <div style={{padding: '5px'}}
      className="header__current-rates">
      {`${currency} = ${format(rates['UAH'] / rates[currency])} UAH`}
    </div>
  )
}

export default HeaderRate