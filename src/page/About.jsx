import React from "react";
import { Link } from "react-router-dom";
import './About.css';
import banner from "../assets/banner.jpg"
import hospitalmain from "../assets/hospitalmain.jpg"
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeContext";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


function About() {
    const { theme } = useContext(ThemeContext)



    useEffect(function () {
        Aos.init({

            duration: 900,
            offset: 50,
            once: false,
            mirror: true,

        })

        //   window.addEventListener('resize', Aos.refresh);
    }, [])
    return (
        <>
            <div className={`About ${theme}`}>
                <div className="card mb-5 Aboutcard position-relative" data-aos="fade-down" data-aos-delay="200">
                    <img
                        src={banner}
                        className="about-banner-img"
                        alt="Hospital"
                    />

                    <div className="card-body Aboutinner text-white position-absolute top-50 start-50 translate-middle text-center" data-aos="fade-up">
                        <p style={{ fontSize: "70px", fontWeight: "bold" }}>About Us</p>

                        <li className="nav-item list-unstyled">
                            <Link className="nav-link text-white fs-5" to="/">
                                <span>Home</span> / About
                            </Link>
                        </li>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="container my-5">
                    <div className="row align-items-center">
                        {/* Left Image */}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="card border-0">
                                <img
                                    src={hospitalmain}
                                    alt="Hospital"
                                    className="img-fluid rounded"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">ABOUT US!</h5>
                                    <h1 className="card-title">Best Orthopadic Clinic</h1>
                                    <p className="card-text">
                                        Welcome to Shiva  Hospital, Faizabad, where we prioritize patient care with a friendly and supportive staff, equipped with the latest medical expertise. We follow all safety protocols, including Covid-19 precautions, ensuring a secure environment for our patients. Our team of doctors and healthcare professionals is committed to delivering world-class care, always putting your well-being first.
                                    </p>
                                    <p className="card-text">
                                        We offer a range of specialized services, including Hand Therapy, Heat Therapy, and Joint Mobilization, providing comprehensive treatment solutions under one roof. To make your visit more convenient, we recommend booking an appointment in advance to minimize waiting times.
                                    </p>
                                    <p className="card-text">
                                        Our clinic operates 24/7, and we accept multiple modes of payment, including cash, ensuring a smooth and hassle-free experience.
                                    </p>

                                    <Link to="/About">
                                        <button type="button" className="btn btn-outline-danger mt-3">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional Info Section */}
                <div className="card border-0  px-3 px-md-5  p-5" data-aos="fade-up">
                    <div className="card-body  ">
                        <p className="card-text">
                            Shiva  Hospital is proud to offer a wide range of therapeutic services tailored to meet individual needs. From Hand Therapy and Heat Therapy to Joint Mobilization and beyond, our comprehensive services ensure that all aspects of your treatment are taken care of under one roof. Our state-of-the-art facilities are designed to provide effective, holistic treatments for various medical conditions, helping you recover faster and more comfortably.


                        </p>
                        <p className="card-text">
                            To make your experience even more convenient, we encourage patients to book appointments in advance, which helps minimize waiting times and ensures prompt attention upon arrival. Our hospital operates around the clock, with 24/7 availability to meet the healthcare needs of our community at any time of the day or night.


                        </p>
                        <p className="card-text">


                            Understanding the importance of convenience, Shiva Hospital offers multiple payment options, including cash, so you can focus on your health without any added financial stress. Our goal is to make your experience as smooth and hassle-free as possible, from the moment you walk through our doors to the completion of your treatment.

                            At Shiva  Hospital, we believe in delivering more than just healthcare; we are committed to fostering a sense of trust, care, and excellence in every interaction. Whether you’re seeking expert medical advice or specialized therapy, we are here to support you on your path to recovery and well-being.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
