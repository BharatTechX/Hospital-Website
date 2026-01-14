
import { Link } from 'react-router-dom'
import hospitalmain from "../assets/hospitalmain.jpg"
import sprain from "../assets/sprain.jpg"
import shoulderpain from "../assets/shoulderpain.jpg"
import nackpain from "../assets/nackpain.jpg"
import keepain from "../assets/keepain.jpg"
import jointdisoder from "../assets/jointdisoder.jpg"
import handpain from "../assets/handpain.jpg"
import fingerpain from "../assets/fingerpain.jpg"
import side from "../assets/side.jpg"
import backpain from "../assets/backpain.jpg"
import banner from "../assets/banner.jpg"
import coridor from "../assets/coridor.jpg"
import coridor4 from "../assets/coridor4.jpg"
import coridor2 from "../assets/coridor2.jpg"
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeContext";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'
import './Home.css'

import carousel1 from"../assets/carousel1.jpg"
import carousel2 from"../assets/carousel2.jpg"
import carousel3 from"../assets/carousel3.jpg"


function Home() {

    const { theme } = useContext(ThemeContext)
    const [show, setShow] = useState(false)


    useEffect(function () {

        Aos.init({
            duration: 900,
            once: false,
            mirror: true


        })



    }, [])




    useEffect(function () {

        const showTimeoutId = setTimeout(function () {
            setShow(true);
        }, 2000);

        const hideTimeoutId = setTimeout(function () {
            setShow(false);
        }, 8000);


        return function () {
            clearTimeout(showTimeoutId);
            clearTimeout(hideTimeoutId);
        };
    }, []);

    return (
        <>
            <div className={`Home ${theme}`}>


                <div className={`welcomeBox ${show ? 'show' : ''}`}>

                    <div classNmae="welcomeBox">
                        <p className="emoji">🙏</p>

                        <h1>Welcome To</h1>
                        <h2 className="mx-2 fw-bold">Shiva Hospital </h2>
                    </div>
                </div>

             {/* carousel---- part */}

                <div
                    id="carouselExampleInterval"
                    className="carousel slide p-2"
                    data-bs-ride="carousel"
                    
                >
                    <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img
                                src={carousel2}
                                className="d-block w-100"
                                alt="Jagat Hospital"
                            />
                            <div className="carousel-caption">
                                <h2>Shiva Hospital</h2>
                                <p>Best Joint Surgery Center Faizabad</p>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src={carousel3}
                                className="d-block w-100"
                                alt="Joint Surgery"
                            />
                            <div className="carousel-caption">
                                <h2>Advanced Joint Care</h2>
                                <p>Trusted Orthopedic Specialists</p>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src={carousel1}
                                className="d-block w-100"
                                alt="Hospital Care"
                            />
                            <div className="carousel-caption">
                                <h2>24/7 Medical Support</h2>
                                <p>Patient Care Comes First</p>
                            </div>
                        </div>

                    </div>

                    {/* Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>


                {/* <second part about> */}

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



                {/* service part */}

                <div className="row  mb-3 " data-aos="zoom-in">
                    <div className="col-12 text-center">

                        <h5 className=" fs-1 f-w-bold"><span>Our </span>Service</h5>
                        <h1 style={{ fontSize: "60px", fontWeight: "700", color: "" }}>The Best &#81;uality</h1>
                        <h1 style={{ fontSize: "70px", fontWeight: "700", color: "" }}>Orthopadics Services</h1>

                    </div>
                </div>

                <div className="container  mb-5">
                    {/* first two card */}


                    <div className="row mb-4">
                        <div className="col-12 col-md-6  mt-5" data-aos="fade-right" data-aos-delay="300">

                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">

                                    <div className="col-12 col-md-8 " >
                                        <div className="card-body" >
                                            <h5 className="card-title fs-1">sprain</h5>
                                            <p className="card-text">

                                                Sprain yaani moch ek aisi injury hoti hai jisme joint ke aas-paas wale ligaments extra stretch ho jaate hain ya phir tear ho jaate hain.
                                                Ligaments wo strong tissues hote hain jo do bones ko ek-dusre se jod kar rakhte hain.
                                            </p>

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 cardimagehover " >
                                        <img
                                            src={sprain}
                                            className="img-fluid"
                                            alt="..."
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-5" data-aos="fade-left" data-aos-delay="300">
                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">
                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={nackpain}
                                            className="img-fluid "
                                            alt="..."
                                        />
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Nack Pain</h5>
                                            <p className="card-text">
                                                Neck pain yaani gardan ka dard ek common condition hai jisme neck muscles, joints ya nerves strain ya irritated ho jaate hain. Ye dard halka sa stiffness se lekar sharp pain tak ho sakta hai, aur kabhi-kabhi shoulders, back,
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* second two card */}

                    <div className="row mb-4 ">
                        <div className="col-12 col-md-6 " data-aos="fade-right" data-aos-delay="300">

                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">

                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Kee Pain</h5>
                                            <p className="card-text">
                                                “Patient ko knee mein dard hai. Dard zyada hota hai jab walk karte hain, stairs chadhte/utarte hain,a hai jab walk karte hain, stairs chadhte/utarte hain, ya knee bend karte hain. Kabhi kabhi swelling, stiffness ya knee unstable feel hoti hai.”
                                            </p>

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={keepain}
                                            className="img-fluid "
                                            alt="..."
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">


                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={backpain}
                                            className="img-fluid "
                                            alt="..."
                                        />
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="card-body card-hover">
                                            <h5 className="card-title fs-1">Low Back Pain</h5>
                                            <p className="card-text">

                                                “Patient ko lower back mein dard hai, jo kabhi kabhi hips aur legs tak radiate karta hai. Dard zyada hota hai prolonged sitting, bending, lifting heavy objects ya walking ke time. Kabhi stiffness aur muscle tightness bhi hoti hai.”
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* third two card */}

                    <div className="row mb-4 ">
                        <div className="col-12 col-md-6 " data-aos="fade-right" data-aos-delay="400">

                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">
                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Joint Dislocate</h5>
                                            <p className="card-text">
                                                “Patient ka joint dislocate ho gaya hai. Joint deform ya out of place lag raha hai, severe pain hai, aur movement restricted hai. Swelling aur bruising bhi ho sakti hai. Patient ko joint ko stabilize karna zaruri hai.”Mera joint dislocate ho gaya hai.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={jointdisoder}
                                            className="img-fluid "
                                            alt="..."
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="400">
                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">
                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={handpain}
                                            className="img-fluid"
                                            alt="..."
                                        />
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Hand Pain</h5>
                                            <p className="card-text">

                                                “Patient ko hand Pain ki zarurat hai. Haath mein pain, swelling, stiffness ya weakness hai, jo daily activities aur fine motor skills ko affect kar raha hai. Therapy ka goal hai joint mobility, muscle strength, aur function improve karna.

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* fourth two cards */}

                    <div className="row mb-4 ">
                        <div className="col-12 col-md-6 " data-aos="fade-right" data-aos-delay="500">

                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">

                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Shoulder Pain</h5>
                                            <p className="card-text">

                                                “Patient ko shoulder mein dard hai, jo movement ke time badhta hai. Kabhi kabhi stiffness, swelling ya limited range of motion bhi hoti hai. Pain lifting, reaching ya rotation ke time zyada feel hota hai.”“Mere shoulder mein dard hai,
                                            </p>
                                            <p className="card-text">
                                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 cardimagehover">
                                        <img
                                            src={shoulderpain}
                                            className="img-fluid"
                                            alt="..."
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="500">
                            <div className="card mb-3 card-hover border-0" style={{ maxWidth: "800px" }}>
                                <div className="row g-0">



                                    <div className="col-12 col-md-4 cardimagehover ">
                                        <img
                                            src={fingerpain}
                                            className="img-fluid "
                                            alt="..."
                                            data-aos="zoom-in" />
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-1">Finger Pain</h5>
                                            <p className="card-text">
                                                “Patient ko finger joints mein dard aur stiffness hai. Kabhi swelling ya redness bhi hoti hai. Pain zyada hota hai gripping, writing, ya fine movements ke time. Joint mobility restricted ho sakti hai.”“Mere fingers ke joints mein dard hai,
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>



                <div className="banner-container">
                    <img src={banner} alt="Banner" className="banner-image blur-image" />
                    <div className="banner-text">
                        <h1>At Shiva  Hospital, We Believe in Delivering More Than Just Healthcare;</h1>
                        <h2>We are Committed to Fostering a Sense of Trust, Care, and Excellence in Every Interaction.</h2>
                    </div>
                </div>



                <div className="row mb-3 mt-5 text-center" data-aos="zoom-in">
                    <div className="col-12">
                        <h5 className="fs-1 fw-bold">OUR Gallery</h5>
                        <h1 className="fs-1 fw-bold">Let's See Our Gallery</h1>
                    </div>
                </div>

                <div className="container-fluid p-5 card-gallery-theme ">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 justify-content-center">
                        <div className="col d-flex justify-content-center" data-aos="fade-up">
                            <div className="card galleryimagee w-75 " >
                                <img src={coridor} className="galleryimg" alt="Gallery 1" />
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center" data-aos="fade-up">
                            <div className="card galleryimagee w-75">
                                <img src={side} className="galleryimg" alt="Gallery 2" />
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center" data-aos="fade-up">
                            <div className="card galleryimagee w-75 ">
                                <img src={coridor2} className="galleryimg" alt="Gallery 3" />
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center" data-aos="fade-up">
                            <div className="card galleryimagee w-75 ">
                                <img src={coridor4} className="galleryimg" alt="Gallery 4" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
} export default Home;