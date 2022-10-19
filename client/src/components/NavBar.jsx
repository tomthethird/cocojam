import React from "react";
import logo from "../assets/coco-colored.png"
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {

    return (
        <div className="navbar fixed-top bg-secondary-wash" id="navbar">
            <div className="row w-100 mx-auto">
                <div className="col-xl-2"></div>
                <div className="col-xl-8 container-fluid">
                    <nav className="navbar navbar-expand">
                        <div className="mx-auto">
                            <ul class="navbar-nav d-flex align-items-center">
                                <li class="nav-item mx-4">
                                    <a class="nav-link active" aria-current="page" href="/"><h5>Home</h5></a>
                                </li>
                                <li class="nav-item mx-4">
                                    <a class="nav-link" href="/"><h5>Products</h5></a>
                                </li>
                                <li className="nav-item mx-4">
                                    <a className="navbar-brand" href="/"><img classNameName="bi" aria-label="logo" src={logo} /></a>
                                </li>
                                <li class="nav-item mx-4">
                                    <a class="nav-link" href="/"><h5>Our Story</h5></a>
                                </li>
                                <li class="nav-item mx-4">
                                    <a class="nav-link" href="/"><h5>Blogs</h5></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-xl-2 d-flex align-items-center justify-content-end pe-5">
                    <div className="dropdown-center mx-5">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><h5>User</h5></a>
                        <ul className="dropdown-menu mt-3">
                            <li><a className="dropdown-item" href="/">My Account</a></li>
                            <li><a className="dropdown-item" href="/">My Wallet</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item">Sign out</button></li>
                        </ul>
                    </div>
                    <a class="nav-link" href="/"><IconContext.Provider value={{ size: "1.8rem", className: "text-primary" }}><FaShoppingCart /></IconContext.Provider></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;