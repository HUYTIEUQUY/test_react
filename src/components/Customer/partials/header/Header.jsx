import React from 'react';
import './Header.scss'
function Header(props) {
    return (
        <div id="header">
            <nav class="menu">
                <a href="" id="logo">
                    <img src="/image/logo1.png" alt="logo" />
                </a>
                <ul id="main_menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Sale</a></li>
                    <li><a href="/products">Products</a></li>
                    <li>
                        <a href="/products">News</a>
                    </li>
                </ul>

            </nav >

        </div >
    );
}

export default Header;