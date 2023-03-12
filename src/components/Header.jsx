import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import '../assets/Header.css'
import Button from './UI/Button'

const Header = () => {
  const {theme, toggleTheme} = useTheme();
 
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <div className='logo-wrapper'>
            <Link to='/'>
              <div className="logo"></div>
            </Link>
            <h1 className="header__heading">CURRENCY CONVERTER</h1>
          </div>
          <nav className="header__navigation">
            <ul className="navigation">
              <li className="navigation__item">
                <Link to='/' className="navigation__link">Home</Link>
              </li>
              <li className="navigation__item">
                <Link to='about' className="navigation__link">About</Link>
              </li>
            </ul>

            <Button onClick={toggleTheme}
             className="styled-btn">
              {theme} <i className="fa-solid fa-moon" ></i>
            </Button>

          </nav>
        </div>
        <div className="current-rates-wrapper">
          <div className="header__current-rates">USD = 38 UAH</div>
          <div className="header__current-rates">EUR = 38 UAH</div>
        </div>
      </div>
    </header>
  )
}

export default Header