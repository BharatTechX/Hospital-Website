import React from "react";
import { MdEmail, MdContactMail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaTwitter, } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'



function Footer() {



  useEffect(function () {
    Aos.init({

      duration: 900,
      offset: 50,
      once: false,
      mirror: true

    })
  }, [])
  return (
    <>
      {/* Top Footer Section */}
      <div className="row row-cols-1 row-cols-md-2  text-light p-4" style={{ backgroundColor: " rgb(0, 0, 0)" }} data-aos="fade-up" data-aos-delay="200">
        {/* Left: Logo & Contact */}
        <div className="card border-0  text-light pt-5 p-4" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
          <div className="card-body">
            <div className="d-flex flex-wrap mb-4  gap-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEld1xg7dXYsQVN0XxjCVs8e8dq25375SgNQ&s"
                alt="Logo"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div className="col  fs-1 fw-bold"> <span>SHIVA</span> HOSPITAL</div>

            </div>

            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <MdLocationOn size={30} color="#ff5733" />
              <p className="m-0">Shiv Nagar, Naka Chungi, Faizabad, Ayodhya</p>
            </div>

            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <MdContactMail size={30} color="#33c1ff" />
              <p className="m-0"><span>920578995</span></p>
            </div>

            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <MdEmail size={30} color="#28a745" />
              <a
                href="mailto:bharatkumar9280@gmail.com?subject=Hello"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span>Shiva </span>Hospital@gmail.com
              </a>

            </div>

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-md-start mt-5">

              <Link to="https:/wa.me/919205116480"><FaWhatsapp size={40} color="#25D366" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>
              <Link to="/Contact"> <FaTwitter size={40} color="#1DA1F2" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>
              <Link to="/Contact"> <FaInstagram size={40} color="#E1306C" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>


            </div>
          </div>
        </div>

        {/* Right: Links */}
        <div className="card border-0  text-light mb-3 p-4 pt-5" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
          <h2 className="fs-1 fw-bold mt-3">Quik Links</h2>
          <div className="card-body text-center text-md-start my-5  " >

            <ul className="list-unstyled m-0 p-">

              <li className="mb-3"><Link className="text-light text-decoration-none text-none" to="/">Home</Link></li>
              <li className="mb-3"><Link className="text-light text-decoration-none text-none" to="/about">About</Link></li>
              <li className="mb-3"><Link className="text-light text-decoration-none text-none" to="/service">Service</Link></li>
              <li className="mb-3"><Link className="text-light text-decoration-none text-none" to="/gallery">Gallery</Link></li>
              <li className="mb-3"><Link className="text-light text-decoration-none text-none" to="/ourteam">Our Team</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="row  text-light border-top p-3" style={{ backgroundColor: "rgb(0, 0, 0)" }} data-aos="fade-down" >
        <div className="col d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" >
          <h6 className="m-0">&copy; <span>Shiva Hospital,</span> All rights reserved.</h6>

          <div className="d-flex gap-3">

            <Link to="https:/wa.me/919205116480"> <FaWhatsapp size={30} color="#25D366" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>
            <Link to="/Contact"> <FaTwitter size={30} color="#1DA1F2" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>

            <Link to="/Contact">  <FaInstagram size={30} color="#E1306C" style={{ backgroundColor: "white", borderRadius: "50%" }} /></Link>
          </div>

          <h6 className="m-0">Designed By <span>3Sixty Street</span></h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
