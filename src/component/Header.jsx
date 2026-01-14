import React from "react";

import { MdEmail, MdContactMail, MdLocationOn } from "react-icons/md"
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./Header.css"
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// import Aos from 'aos'
// import "aos/dist/aos.css"
// import { useEffect } from 'react'

function Header() {
    const { theme } = useContext(ThemeContext)


    // useEffect(function () {
    //     Aos.init({

    //         duration: 900,
    //         offset: 50,
    //         once:true,

    //     })
    // }, [])

    return (
        <>
            {/* <div className={`Header ${theme}`}> */}
            <div className={` section Header ${theme}`} >
                <div className="innerSection " >
                    <MdLocationOn size={20} color={" #ff5733"} />
                   <a href="https://www.google.com/maps/place/Jagat+Hospital,Faizabad,+Uttar+Pradesh+224158" target="_blank" rel="noopener noreferrer">
  Faizabad-224158
</a>

                </div>

                <div className="innerSection ">
                    <MdContactMail size={20} color={" #33c1ff"} />

                    <a href="/Contact">92054660</a>
                </div>

                <div className="innerSection"  >
                    <MdEmail size={20} color={"#28a745"} />

                    <a href="mailto:bharatkumar9280@gmail.com?subject=hello&body=I want contact you" target="_blank">Shiva Hospital@gmail.com</a>
                </div>
                

                <div className="icon">
                    <a  href="https://wa.me/919205116480">
                        <FaWhatsapp className="sizei" size={50} color={"#25D366"} />
                    </a>
                    <Link to="/Contant">
                        <FaTwitter className="sizei" size={50} color={"#1DA1F2"} />
                    </Link>
                    <Link to="/Contant">
                        <FaInstagram className="sizei" size={50} color={"#E1306C"} />
                    </Link>
                </div>
            </div>

            {/* </div> */}

        </>
    )
} export default Header;