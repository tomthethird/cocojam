import React from "react";
import logo from "../assets/coco.png"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {

    return (
        <div>
            <div className="bg-primary pt-5 pt-5 pb-3 text-white">
                <div className="row px-5 mx-auto">
                    <div className="col-xl-5 text-start pe-5">
                        <a className="navbar-brand" href="/"><img classNameName="bi" aria-label="logo" src={logo} width="180px"/></a>
                        <p>An e-commerce based in Manila, Philippines<br />
                            offering wide range of coconut products.</p>
                    </div>
                    <div className="col-xl-4 text-start pb-5">
                        <a className="navbar-brand" href="/"><h5>Contact</h5></a>
                        <p>Office: Unit A, 21F Commercial Building,<br />
                            28 Road, Manila City, Philippines<br /><br />
                            Email: inquiry@coco.com</p>
                        <p>Privacy Policy | Terms of Use | Refund Policy</p>
                    </div>
                    <div className="col-xl-3 text-end">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h5>Products</h5></Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h5>Our Story</h5></Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h5>Blogs</h5></Link>
                    </div>
                </div>
                <div className="row mx-auto px-5 align-items-center">
                    <div className="col-xl-6 text-start">
                        <p className="m-0 small">© 2022 COCO. All rights reserved.</p>
                    </div>
                    <div className="col-xl-6 navbar navbar-expand d-flex justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item me-4">
                                <a href="https://www.facebook.com">
                                    <IconContext.Provider value={{ size: "1.5rem", className: "text-white" }}><FaFacebookF /></IconContext.Provider>
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a href="https://www.instagram.com">
                                    <IconContext.Provider value={{ size: "1.5rem", className: "text-white" }}><FaInstagram /></IconContext.Provider>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.tiktok.com">
                                    <IconContext.Provider value={{ size: "1.5rem", className: "text-white" }}><FaTiktok /></IconContext.Provider>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;