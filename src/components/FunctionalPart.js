import React from 'react';
import '../media/styles/FunctionalPart.css';
import Sidebar from './Sidebar'
import logo from '../media/svg-icons/zara.svg'

export const FunctionalPart = () => (
    <div className="functional-part">
        <Sidebar></Sidebar>
        <header className="header">
            <img className="header__logo" src={logo} alt=""/>
            <div className="header__search">
                <span className="header__search-txt">Поиск</span>
                <input className="header__search-input" type="text" placeholder="Брюки"/>
            </div>
            <nav className="header__navigation-menu">
                <ul className="header__actions">
                    <li className="header__actions__item">
                        <a className="header__actions__item-link" href="/">Начать сейчас</a>
                    </li>
                    <li className="header__actions__item">
                        <a className="header__actions__item-link" href="/">Помощь</a>
                    </li>
                    <li className="header__actions__item">
                        <a className="header__actions__item-link" href="/">
                            <svg id="basket" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <path d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z"/>
                            </svg>
                        </a>
                        <span id="basket-counter">0</span>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
)