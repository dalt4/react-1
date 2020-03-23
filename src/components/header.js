import React from 'react';
import logo from '../img/avvk.png'

function Header() {
    return (
        <header className='header'>
            <div className="wrapper">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="logo" className="header__logo-img"/>
                    </div>
                    <div className="header__scene">
                        <h1 className='header__title'>First on REACT!</h1>
                    </div>
                </div>
            </div>
        </header>
    )}

export default Header;
