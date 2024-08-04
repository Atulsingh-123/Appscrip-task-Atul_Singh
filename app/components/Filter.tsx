"use client";

import React, { useState } from 'react';
import { useSidebar } from '../context/Context';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';
import './Filter.css';

const Filter: React.FC = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const selectOption = (option: string) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <div className="filter-wrapper">
            <div className="filter-container">
                <div className="desktop-view">
                    <div className="desktop-view-content">
                        <div className="desktop-view-left">
                            <span className="items-count">3425 ITEMS</span>
                            <button className="filter-button" onClick={toggleSidebar}>
                                {isSidebarOpen ? (
                                    <>
                                        <MdKeyboardArrowLeft className="icon" />
                                        HIDE FILTER
                                    </>
                                ) : (
                                    <>
                                        <MdKeyboardArrowRight className="icon" />
                                        SHOW FILTER
                                    </>
                                )}
                            </button>
                            <div className='Recommended'>
                                <button className="sort-button" onClick={toggleDropdown}>
                                    <h3 className="sort-option">{selectedOption}</h3>
                                    <span className="icon-wrapper">
                                        <IoIosArrowDown className="icon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'].map(option => (
                                    <button
                                        key={option}
                                        className="dropdown-item"
                                        onClick={() => selectOption(option)}
                                    >
                                        {selectedOption === option && '✔ '}
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mobile-view">
                <button className="mobile-filter-button">FILTER</button>
                <div className="divider"></div>
                <div className="relative">
                    <button className="sort-button" onClick={toggleDropdown}>
                        <h3 className="sort-option">{selectedOption}</h3>
                        <span className="icon-wrapper">
                            <IoIosArrowDown className="icon" />
                        </span>
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'].map(option => (
                                <button
                                    key={option}
                                    className="dropdown-item"
                                    onClick={() => selectOption(option)}
                                >
                                    {selectedOption === option && '✔ '}
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filter;
