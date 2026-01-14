import React from "react";
import './Service.css'
import { Link } from 'react-router-dom'
import sprain from "../assets/sprain.jpg"
import shoulderpain from "../assets/shoulderpain.jpg"
import nackpain from "../assets/nackpain.jpg"
import keepain from "../assets/keepain.jpg"
import jointdisoder from "../assets/jointdisoder.jpg"
import handpain from "../assets/handpain.jpg"
import fingerpain from "../assets/fingerpain.jpg"
import backpain from "../assets/backpain.jpg"
import banner from"../assets/banner.jpg"
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeContext";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function Service() {

    const{theme}=useContext(ThemeContext)

    
      useEffect(function () {
          Aos.init({
  
              duration: 900,
              offset: 50,
              once:false,
              mirror:true
  
          })
      }, [])
    return (
        <>

<div className={`Service ${theme}`}>
            <div className="card mb-5 Aboutcard " data-aos="fade-down">
                <img
                    src={banner}
                    className=""
                    alt="Hospital"
                    style={{
                        height: "400px",
                        objectFit: "cover",
                        objectPosition: "center",
                        filter: "blur(4px)"
                    }}
                />
                <div className="card-body Aboutinner  text-white">
                    <p className=" fw-bold">Service</p>
                    <li className="nav-item list-unstyled">
                        <Link className="nav-link text-white fs-5 ms-5" to="/">
                            <span>Home</span> /Service
                        </Link>
                    </li>
                </div>
            </div>


          
            
                <div className="row  mb-3 " data-aos="zoom-in">
                    <div className="col-12 text-center">

                        <h5 className=" fs-1 f-w-bold"><span>Our </span>Service</h5>
                        <h1 style={{fontSize:"60px" ,fontWeight:"700" ,color:""}}>The Best &#81;uality</h1>
                        <h1 style={{fontSize:"70px" ,fontWeight:"700" ,color:""}}>Orthopadics Services</h1>

                    </div>
                </div>





            {/* second part cards */}

           

            <div className="container  mb-5">
                {/* first two card */}


                <div className="row mb-4">
                    <div className="col-12 col-md-6  mt-5" data-aos="fade-right" data-aos-delay="200">

                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
                            <div className="row g-0">

                                <div className="col-12 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-1">sprain</h5>
                                        <p className="card-text">

                                            Sprain yaani moch ek aisi injury hoti hai jisme joint ke aas-paas wale ligaments extra stretch ho jaate hain ya phir tear ho jaate hain.
                                            Ligaments wo strong tissues hote hain jo do bones ko ek-dusre se jod kar rakhte hain.
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 cardimagehover " >
                                    <img
                                        src={sprain}
                                        className="img-fluid "
                                        alt="..."
                                         />
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mt-5" data-aos="fade-left" data-aos-delay="200">
                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
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
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* second two card */}

                <div className="row mb-4 ">
                    <div className="col-12 col-md-6 "data-aos="fade-right" data-aos-delay="300">

                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
                            <div className="row g-0">

                                <div className="col-12 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-1">Kee Pain</h5>
                                        <p className="card-text">
                                            “Patient ko knee mein dard hai. Dard zyada hota hai jab walk karte hain, stairs chadhte/utarte hain,a hai jab walk karte hain, stairs chadhte/utarte hain, ya knee bend karte hain. Kabhi kabhi swelling, stiffness ya knee unstable feel hoti hai.”
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
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

                    <div className="col-12 col-md-6"data-aos="fade-left" data-aos-delay="300">
                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
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
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                {/* third two card */}

                <div className="row mb-4 ">
                    <div className="col-12 col-md-6 "data-aos="fade-right" data-aos-delay="400">

                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
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
                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
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
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* fourth two cards */}

                <div className="row mb-4 ">
                    <div className="col-12 col-md-6 "data-aos="fade-right" data-aos-delay="500">

                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
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
                        <div className="card mb-3 card-hover" style={{ maxWidth: "800px" }}>
                            <div className="row g-0">



                                <div className="col-12 col-md-4 cardimagehover">
                                    <img
                                        src={fingerpain}
                                        className="img-fluid "
                                        alt="..."
                                    />
                                </div>

                                <div className="col-12 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-1">Finger Pain</h5>
                                        <p className="card-text">
                                            “Patient ko finger joints mein dard aur stiffness hai. Kabhi swelling ya redness bhi hoti hai. Pain zyada hota hai gripping, writing, ya fine movements ke time. Joint mobility restricted ho sakti hai.”“Mere fingers ke joints mein dard hai,
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

</div>



        </>
    )
} export default Service;