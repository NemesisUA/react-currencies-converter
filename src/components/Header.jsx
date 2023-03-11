import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <Link to='/'>
            <h1 className="header__heading">CURRENCY CONVERTER</h1>
          </Link>
          <nav className="header__navigation">
            <ul className="navigation">
              <li className="navigation__item">
                <Link to='/' className="navigation__link">Home</Link>
              </li>
              <li className="navigation__item">
                <Link to='about' class="navigation__link">About</Link>
              </li>
            </ul>
          </nav>
          <div className="toggle-wrapper">
            <button className="styled-btn">
              toggle
              <i className="fa-solid fa-moon" ></i>
            </button>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="header__current-rates">USD = 38 UAH</div>
          <div className="header__current-rates">EUR = 38 UAH</div>
        </div>
      </div>
    </header>
  )
}

export default Header