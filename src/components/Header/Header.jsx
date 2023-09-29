import React, { useRef, useEffect } from 'react'

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png"
import { motion } from "framer-motion"

import DropDownMenu from '../DropdownMenu/DropDown';

import { NavLink, Link } from 'react-router-dom';
import "./Header.css";
import { Container, Row } from "reactstrap";

import { useSelector } from 'react-redux';

const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
];

const dropdown = [
    {
        icon: "ri-user-3-line",
        text: "Profile User"
    },
    {
        icon: "ri-logout-box-line",
        text: "Sign out"
    }
]

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);


    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })
    };

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener("scroll", stickyHeaderFunc)
    });

    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav__wrapper'>
                        <Link to="/home">
                            <div className='logo'>
                                    <img src={logo} alt='logo' />
                                    <div>
                                        <h1>Book Shop</h1>
                                    </div>
                            </div>
                        </Link>

                        <div className='navigation' ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={(navClass) => navClass.isActive ? "nav__active" : ""}
                                            >{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className='fav__icon'>
                                <i className="ri-heart-line"></i>
                                <span className='badge'>2</span>
                            </span>
                            <span className='cart__icon'>
                                <Link to="/cart">
                                    <i className="ri-shopping-bag-line"></i>
                                    {/* <span className='badge'>2</span> */}
                                    <span className='badge'>{totalQuantity === 0 ? "" : totalQuantity}</span>
                                </Link>
                            </span>

                            <span>

                                <DropDownMenu />

                                {/* <div className="dropdown__container">

                                <div className="dropdown__menu">
                                    <ul>
                                    {
                                        dropdown.map((item, index) => (
                                            <DropdownItem 
                                                key={index}
                                                icon={item.icon}
                                                text={item.text}
                                                />
                                                ))
                                    }
                                    </ul>
                                </div>

                                </div> */}
                            </span> 

                            <div className='mobile__menu'>
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>

                        </div>

                        
                    </div>
                </Row>
            </Container>
        </header>
    )
}

function DropdownItem (props) {
    return (
        <li className="dropdown__item">
            <i className={props.icon}></i>
            <a href="">{props.text}</a>
        </li>
    )
}

export default Header;