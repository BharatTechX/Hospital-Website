import React from "react";
import { Link } from 'react-router-dom'
import './Gallery.css'
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import banner from "../assets/banner.jpg"
import coridor from "../assets/coridor.jpg"
import side from "../assets/side.jpg"
import coridor2 from "../assets/coridor2.jpg"
import hospitalmain from "../assets/hospitalmain.jpg"
import coridor4 from "../assets/coridor4.jpg"
import nameplat from "../assets/nameplat.jpg"
import coridoor3 from "../assets/coridoor3.jpg"
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeContext";

import cd from "../assets/cd.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'





function Gallery() {
    const { theme } = useContext(ThemeContext)
    

    useEffect(function () {
        Aos.init({

            duration: 900,
            offset: 50,
            once: false,
            mirror: true,

        })

        
    }, [])

    return (
        <>
            <div className={` Gallery ${theme}`}>
                <div className="card mb-3 Aboutcard position-relative" data-aos="fade-down">
                    <img
                        src={banner}
                        className="about-banner-img"
                        alt="Hospital"
                    />

                    <div className="card-body Aboutinner text-white position-absolute top-50 start-50 translate-middle text-center">
                        <p style={{ fontSize: "70px", fontWeight: "bold" }} >Gallery Us</p>

                        <li className="nav-item list-unstyled">
                            <Link className="nav-link text-white fs-5" to="/">
                                <span>Home</span> / Gallery
                            </Link>
                        </li>
                    </div>
                </div>


                <div className="contaimer p-5">

                    <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 my-5 d-flex justify-content-center align-items-center">
                        {/* Card 1 */}
                        <div className="col mx-5" >
                            <div className="card galleryimage  galleryimagee " data-aos="fade-right" >
                                <img src={coridor} className="galleryimg" />

                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>

                        </div>




                        {/* Card 3 */}
                        <div className="col mx-5 ">
                            <div className="card galleryimage galleryimagee  "   data-aos="fade-up">
                                <img src={side} className="galleryimg" />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col mx-5">
                            <div className="card galleryimage galleryimagee "  data-aos="fade-left">
                                <img src={coridor2} className="galleryimg" alt="..." />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 d-flex justify-content-center align-items-cente">
                        {/* Card 1 */}
                        <div className="col mx-5" >
                            <div className="card  galleryimage  galleryimagee"   data-aos="fade-right" >
                                <img src={hospitalmain} className="galleryimg" />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>

                            </div>
                        </div>




                        {/* Card 3 */}
                        <div className="col mx-5">
                            <div className="card galleryimage galleryimagee "  data-aos="fade-up">
                                <img src={coridor4} className="galleryimg" />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col mx-5">
                            <div className="card galleryimage galleryimagee"   data-aos="fade-left">
                                <img src={nameplat} className="galleryimg" alt="..." />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 d-flex justify-content-center align-items-cente">
                        {/* Card 1 */}
                        <div className="col mx-5" >
                            <div className="card galleryimage galleryimagee"   data-aos="fade-right" >
                                <img src={coridoor3} className="galleryimg" />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>




                        {/* Card 3 */}
                        <div className="col mx-5">
                            <div className="card galleryimage galleryimagee"   data-aos="fade-up">
                                <img src={side} className="galleryimg" />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col mx-5">
                            <div className="card galleryimage galleryimagee "  data-aos="fade-left">
                                <img src={cd} className="galleryimg" alt="..." />
                                <div className="overlay">
                                    <h3>Shanvi Hospital</h3>
                                    <a className="iconhover" href="https:wame//909205116480" target="blank"> <FaWhatsapp size={50} /></a>
                                    <a className="iconhover2" href="" target="blank"> <FaTwitter size={50} /></a>
                                    <a className="iconhover3" href="https:wame//909205116480" target="blank"> <FaInstagram size={50} /></a>

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
} export default Gallery;