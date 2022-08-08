import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/everest.png';
import Search from '../../assets/images/searchicon.png';
import ShoppingBag from '../../assets/images/shoppingbag.png';

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <img className="header__logo" src={Logo} alt="everest logo" />
                <div className="header__search">
                    <input className="header__search-bar" type="text" />
                    <div className="header__search-icon-container">
                        <img className="header__search-icon" src={Search} alt="search" />
                    </div>
                </div>
                <div className="header__profile">
                    <p className="header__user">Welcome</p>
                    <p className="header__login">Login</p>
                </div>
                <div className="header__returns-orders">
                    <p className="header__returns">Returns</p>
                    <p className="header__orders">& Orders</p>
                </div>
                <div className="header__everest-prime">
                    <p className="header__your">Your</p>
                    <p className="header__prime">Prime</p>
                </div>
                <div className="header__cart">
                    <img className="header__bag" src={ShoppingBag} alt="shopping basket" />
                    <p className="header__cart-count">0</p>
                </div>
            </nav>
        </header>
    )
}

export default Header