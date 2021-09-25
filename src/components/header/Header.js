import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <img src={logo} alt="Girl in a jacket" />
            <nav>
              <a href="/shop">Shop</a>
              <a href="/order">Order</a>
              <a href="/Inventory">Inventory Shop</a>
            </nav>
            
        </div>
    );
};

export default Header;