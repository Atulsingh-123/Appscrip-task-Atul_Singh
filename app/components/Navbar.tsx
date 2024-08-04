import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import React from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="top-bar">
                <div className="top-bar-content">
                    <span className="element-group mobile-element">
                        <img src="/element.png" alt="Element Icon" className="element-icon" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                    <span className="element-group tablet-element">
                        <img src="/element.png" alt="Element Icon" className="element-icon" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                    <span className="element-group desktop-element">
                        <img src="/element.png" alt="Element Icon" className="element-icon" />
                        <span>Lorem ipsum dolor</span>
                        <img src="/element.png" alt="Element Icon" className="element-icon" />
                        <span>Lorem ipsum dolor</span>
                        <img src="/element.png" alt="Element Icon" className="element-icon" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                </div>
            </div>

            <div className="main-navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <button className="menu-button">
                            <FaBars />
                        </button>
                        <img src="/logo.png" alt="Logo" className="logo" />
                    </div>
                    <div className="navbar-center">
                        <span className="navbar-logo">LOGO</span>
                    </div>
                    <div className="navbar-right">
                        <button className="icon-button mobile-icon">
                            <CiSearch />
                        </button>
                        <button className="icon-button mobile-icon">
                            <CiHeart />
                        </button>
                        <button className="icon-button mobile-icon">
                            <LuShoppingBag />
                        </button>
                        <button className="icon-button desktop-icon">
                            <CiSearch />
                        </button>
                        <button className="icon-button desktop-icon">
                            <CiHeart />
                        </button>
                        <button className="icon-button desktop-icon">
                            <LuShoppingBag strokeWidth="1" />
                        </button>
                        <button className="icon-button desktop-icon">
                            <CiUser />
                        </button>
                        <div className="language-switcher">
                            ENG <FaCaretDown />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-link">
                <div className="bottom-link-content">
                    <a href="#" className="nav-link">SHOP</a>
                    <a href="#" className="nav-link">SKILLS</a>
                    <a href="#" className="nav-link">STORIES</a>
                    <a href="#" className="nav-link">ABOUT</a>
                    <a href="#" className="nav-link">CONTACT US</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
