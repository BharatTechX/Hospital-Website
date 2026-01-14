
import './Contact.css'
import { Link } from 'react-router-dom'
import { MdEmail, MdContactMail, MdLocationOn } from "react-icons/md"
import banner from "../assets/banner.jpg"
import { ThemeContext } from "../component/ThemeContext";
import { useContext } from "react";

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'






function Contact() {
    const { theme } = useContext(ThemeContext)

    

    useEffect(function () {
        Aos.init({

            duration: 900,
            offset: 50,
            once: false,
            mirror: true,

        })

        
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstname = e.target.firstname.value;
        const lastname = e.target.lastname.value;
        const phone = e.target.phone.value;
        const query = e.target.query.value
        const message = e.target.message.value;

        const text = `
Name: ${firstname} ${lastname}
Phone: ${phone}
Query:${query}
Message: ${message}
        `;

        const number = "919205116480";
        const link = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;


        

        window.open(link, "_blank");

        e.target.reset();    // WhatsApp me open karega
    };

    return (
        <>

            {/* Banner */}
            <div className={`Contact ${theme}`}>
                <div className="card mb-3 Aboutcard position-relative" data-aos="fade-down">
                    <img
                        src={banner}
                        className="about-banner-img"
                        alt="Hospital"
                    />

                    <div className="card-body Aboutinner text-white position-absolute top-50 start-50 translate-middle text-center">
                        <p style={{ fontSize: "70px", fontWeight: "bold" }}>Contact Us</p>

                        <li className="nav-item list-unstyled">
                            <Link className="nav-link text-white fs-5" to="/">
                                <span>Home</span> / Contact
                            </Link>
                        </li>
                    </div>
                </div>


                {/* Contact Form */}

                <div className="container-fluidee p-5 mt-5 mb-5" data-aos="fade-up">
                    <div className="row">
                        {/* Heading */}
                        <div className="col  d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="0.2s">
                            <h1 className="mx-5 mt-5 text-light" style={{ fontSize: "80px", fontStyle: "italic", fontWeight: "bold" }}>
                                Contact Us
                            </h1>
                        </div>

                        {/* Form Container */}
                        <div className="contactbackground col p-5 mt-5" data->
                            <div className="col mb-4">
                                <h1>Do You Have Any</h1>
                                <h1>Questions?</h1>
                            </div>

                            <form onSubmit={handleSubmit} className="row gx-2 gy-3" data-aos="zoom-in-up" data-aos-delay="500">
                                {/* First Name */}
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="form-control p-3"
                                        placeholder="Your First Name"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        name="lastname"
                                        className="form-control p-3"
                                        placeholder="Your Last Name"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="col-md-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control p-3"
                                        placeholder="Your Phone"
                                        required
                                    />
                                </div>

                                {/* Query Select */}
                                <div className="col-md-12">
                                    <select
                                        name="query"
                                        className="form-select p-3"
                                        defaultValue=""
                                        required
                                        aria-label="Select your query type"
                                    >
                                        <option value="" disabled>
                                            Select Your Query
                                        </option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Appointment">Appointment</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="col-md-12">
                                    <textarea
                                        name="message"
                                        className="form-control p-3"
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-danger p-3 mt-3" style={{ width: "100%" }}>
                                        Send via WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <div className="contactcard" data-aos="zoom-in-up">
                                <MdLocationOn size={30} color={"#ff5733"} />
                                <div>
                                    <h3>Address</h3>
                                    <p>Shiv Nagar, Naka Chungi, Faizabad, Ayodhya</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contactcard" data-aos="zoom-in-up">
                                <MdEmail size={20} color={"#28a745"} />
                                <div>
                                    <h3>Mail Us</h3>
                                    <p>ShivaHospital@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contactcard" data-aos="zoom-in-up">
                                <MdContactMail size={20} color={"#33c1ff"} />
                                <div>
                                    <h3>Telephone</h3>
                                    <p>920511780</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="container mb-5">
                    <div className="row">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28500.05202594585!2d82.140317!3d26.76012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a08a5c1138fe9%3A0x64643bc84133f5f0!2z8J2XnfCdl67wnZe08J2XrvCdmIEg8J2Xm_Cdl7zwnZiA8J2XvfCdl7bwnZiB8J2XrvCdl7ko8J2XnfCdl7zwnZe28J2Xu_CdmIEg8J2XpvCdmILwnZe_8J2XtPCdl7LwnZe_8J2YhiAmIPCdl6LwnZe_8J2YgfCdl7XwnZe88J2XvfCdl67wnZex8J2XtvCdl7Ag8J2Xm_Cdl7zwnZiA8J2XvfCdl7bwnZiB8J2XrvCdl7kpIC1CZXN0IE9ydGhvcGVkaWMgfCBGcmFjdHVyZSBDbGluaWMgfCBKb2ludCBTdXJnZXJ5IENlbnRlciBpbiBGYWl6YWJhZA!5e0!3m2!1sen!2sin!4v1765138002754!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hospital Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
