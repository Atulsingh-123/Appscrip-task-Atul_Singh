"use client";

import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './FilterSidebar.css';

const FilterSidebar: React.FC = () => {
    return (
        <div className="filter-sidebar-wrapper">
            <div className="filter-option">
                <input type="checkbox" id="customizable" className="filter-checkbox" />
                <label htmlFor="customizable" className="filter-label">
                    CUSTOMIZABLE
                </label>
            </div>

            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>IDEAL FOR</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>

            <hr className="filter-divider" />
            <div className="filter-category">
                <div className="filter-category-header">
                    <span>OCCASION</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>WORK</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>FABRIC</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>SEGMENT</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>SUITABLE FOR</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>RAW MATERIALS</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />

            <div className="filter-category">
                <div className="filter-category-header">
                    <span>PATTERN</span>
                    <span><IoIosArrowDown className="filter-icon" /></span>
                </div>
                <div className="filter-category-content">All</div>
            </div>
            <hr className="filter-divider" />
        </div>
    );
};

export default FilterSidebar;
