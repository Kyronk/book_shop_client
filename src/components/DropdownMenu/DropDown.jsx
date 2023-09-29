import React, { useState } from 'react'
import userIcon from "../../assets/images/user-icon.png"
import { motion } from "framer-motion"
import { NavLink, Link } from 'react-router-dom';

import "./dropdown.css";

const DropDown = () => {
    return (
        <>
            <div className="menu__trigger">
                <NavItem>
                    <DropDownMenu />

                </NavItem>

                
            </div>
        </>
    )
};


function NavItem(props) {

    const [open, setOpen] = useState(false);


    return (
        
        <>
            <a 
                href="#" 
                
                onClick={() => setOpen(!open)}
            >
                {/* <i className={props.icon + " icon"} ></i> */}
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
            </a>

            {
                open && props.children
            }
        </>
    )
};


function DropDownMenu() {

    function DropDownItem(props) {
        return (
            <a href='#' className="menu-item">
                {/* <span className="icon-button">
                    {props.leftIcon}
                </span> */}
                <span className="icon-button">
                    <i className={props.leftIcon}></i>
                </span>

                <span className="info__icon">
                    <h6>{props.children}</h6>
                </span>

            </a>
        )
    }   

    return (
        <div className="dropdown">
            <DropDownItem
                leftIcon="ri-user-3-line"
            >
                My Profile
            </DropDownItem>
            <DropDownItem
                leftIcon="ri-heart-line"
            >
                My fi
            </DropDownItem>

            <DropDownItem
                leftIcon="ri-logout-box-line"
            >
                Sign out
            </DropDownItem>
        </div>
    )
};

export default DropDown