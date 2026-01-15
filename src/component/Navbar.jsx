import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import logo from"../assets/logo.png"




function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    useEffect(function () {

        Aos.init({

            duration: 900,
            once: true,   // Scroll पर हर बार animate होने के लिए
        

        })


    }, [])

    return (
        <>

            {/* Navbar for all screens */}

            <nav className={`navbar ${theme} navbar navbar-light   d-flex justify-content-around  p-3  `} style={{  position: "sticky", top: "70px", zIndex: "2"}} >

                <div className="container  d-flex justify-content-between align-items-center p-3 ">

                    {/* Logo + Text */}
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2 ">
                        <img
                            src={logo}   // <-- React में public file ऐसे call होती है
                            alt="logo"
                            className="hospital-logo"
                        />
                        <h1 className="fw-bold  fs-1 hospital-title">
                            <span>Shiva</span> Hospital
                        </h1>
                    </div>

                    {/* Mobile menu Button */}
                    <button
                        className="btn btn-primary d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        ☰
                    </button>


                    {/* Hamburger button for small screens */}


                    {/* Horizontal menu for large screens */}
                    <ul className="nav nav-pills d-none d-lg-flex ms-auto m-auto " style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark"
                                href="/Service"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Service">Service</Link></li>
                                <li><Link className="dropdown-item" to="#Service"> General Bone & Joint Checkup</Link></li>
                                <li><Link className="dropdown-item" to="#Service">Pediatric Orthopaedics</Link></li>

                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/ourteam">OurTeam</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contact">Contact</Link>
                        </li>

                    </ul>


                   <button
  type="button"
  className="btn btn-primary hidden-btn d-none d-lg-inline-block"
  onClick={toggleTheme}
  data-aos="fade-down"
>
  {theme === "light" ? " 🌙 Dark Mode " : "🌞 Light Mode"}
</button>

                </div>



            </nav>

            {/* Offcanvas sidebar for small screens */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header">
                       <div className="d-flex flex-column flex-md-row align-items-center gap-2 ">
                        <img
                            src={logo}   // <-- React में public file ऐसे call होती है
                            alt="logo"
                            className="hospital-logo"
                        />
                        <h1 className="fw-bold  fs-1 hospital-title">
                            <span>Shiva</span> Hospital
                        </h1>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column">
                        <Link className="nav-link text-danger" to="/">Home</Link>
                        <Link className="nav-link text-dark" to="/about">About</Link>

                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark"
                                href="/Service"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </Link>



                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Service">Service</Link></li>
                                <li><Link className="dropdown-item" to="#Service"> General Bone & Joint Checkup</Link></li>
                                <li><Link className="dropdown-item" to="#Service">Pediatric Orthopaedics</Link></li>

                            </ul>
                        </li>

                        <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
                         <Link className="nav-link text-dark" to="/ourteam">Our Team</Link>
                        <li className="nav-item mt-3">

                            <Link className="nav-link text-dark" to="/Contact">

                                <button className="btn btn-danger ">Contact</button></Link>
                                
                                    <button type="button" className="btn btn-primary mt-3" onClick={toggleTheme} >

                        {/* {theme === "light" ? "Light Mode" : "Dark Mode"} */}

                        {theme === "light" ? " 🌙 Dark Mode " : "🌞 Light Mode"}

                    </button>

                        </li>
                    </ul>



                </div>


            </div>


        </>
    );
}

export default Navbar;
