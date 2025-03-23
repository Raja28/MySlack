// SlackHeader.js
import React from 'react';
import slackLogo from '../assets/slack2.png'
import { Navbar, Nav, Button, Form, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    return (

        <nav className="navbar bg-body-tertiary navbar-expand-lg  container">
            <div className="container-fluid">
                <img src={slackLogo} className="navbar-brand" href="#" height={60} />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={slackLogo} className="navbar-brand" href="#" height={60} />
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">

                        <div className='d-flex justify-content-between w-100 align-items-center '>

                            <ul className="navbar-nav text-dark fw-semibold flex-grow-1 pe-3 w-100">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" aria-current="page" href="#">
                                        Product
                                        <FaAngleDown />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Enterprise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>

                            <div className='d-flex gap-4 justify-content-end  w-100 align-items-center  '>
                                <div>
                                    <FaSearch />
                                </div>
                                <div className='btn fw-semibold'> Sign In </div>
                                <div className='btn fw-semibold btn-outline-dark'> TALK TO SALES </div>
                                <div className='btn fw-semibold btn-dark'> TRY FOR FREE </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
