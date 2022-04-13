import React from 'react'
import logo from '../../images/Logo.svg'
import './Header.css'


function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Логотип AviaSales' />
        </header>
    )
}

export default Header