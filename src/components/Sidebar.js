import React from 'react';
import '../media/styles/Sidebar.css';
import menu from '../media/svg-icons/menu.svg'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isInfoActive: false };
    }
    handleInfoClick = () => {
        this.setState(state => ({isInfoActive: !state.isInfoActive}));
    };
    render() {
        return (
            <div className="sidebar">
                <img className="sidebar__img" src={menu}  alt="" aria-hidden="true"/>
                <div className="sidebar__menu">
                    <nav className="sidebar__menu__navigation">
                        <a href="/" className="sidebar__menu__navigation-link">Женщины</a>
                        <a href="/" className="sidebar__menu__navigation-link">Мужчины</a>
                        <a href="/" className="sidebar__menu__navigation-link">Дети</a>
                        <a href="/" className="sidebar__menu__navigation-link">Обувь и сумки</a>
                        <a href="/" className="sidebar__menu__navigation-link">Join life</a>
                        <div className="sidebar__menu__navigation__info">
                            <span className="sidebar__menu__navigation__info-link" onClick={this.handleInfoClick}>+ info</span>
                            { this.state.isInfoActive ? (
                                <div className="sidebar__menu__navigation__info__block">
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Newsletter</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Обратная связь</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Магазины</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Справка</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Подарочная карта</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">Пресса</a>
                                    <a href="/" className="sidebar__menu__navigation__info__block-link">О компании</a>
                                </div>) : ('')}
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;