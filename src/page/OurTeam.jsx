import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OurTeam.css";
import "./About.css";
import banner from "../assets/banner.jpg";
import doctor from "../assets/doctor.jpg";
import doctor1 from "../assets/doctor1.jpg";
import { ThemeContext } from "../component/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";

function OurTeam() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <>
      <div className={`OurTeam ${theme}`}>
        {/* Banner Section */}
        <div className="card mb-3 Aboutcard position-relative" data-aos="fade-down">
          <img src={banner} className="about-banner-img" alt="Hospital" />

          <div className="card-body Aboutinner text-white position-absolute bottom-0 start-50 translate-middle-x text-center mb-4">
            <p style={{ fontSize: "60px", fontWeight: "bold" }}>Our Team</p>

            {/* li को ul के अंदर रखा */}
            <ul className="list-unstyled">
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/">
                  <span>Home</span> / Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Team Cards */}
        <div className="container my-5">
          {/* Row 1 */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 mt-5">
            {/* Card 1 */}
            <div className="col mx-5">
              <div className="cardmain" data-aos="fade-right" data-aos-delay="200">
                <img src={doctor1} className="doctor-img" alt="Doctor" />
                <div className="card-body p-3">
                  <h5 className="card-title">DR. B.K (Bharat Kumar)</h5>
                  <p className="card-subtitle mb-2 text-muted">(Owner of the hospital)</p>
                  <p className="card-text">SPECIALITY: ORTHOPEDIC SURGEON</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col mx-5">
              <div className="cardmain p-3 border-0" data-aos="fade-up" data-aos-delay="200">
                <img
                  src={doctor}
                  className="card-img-top mb-2"
                  style={{ width: "230px", height: "auto", marginTop: "40px", paddingLeft: "20px" }}
                  alt="Doctor"
                />
                <div className="card-body">
                  <h5 className="card-title mt-5">DR. Nirali Maurya (MBBS)</h5>
                  <p className="card-text">SPECIALITY: ANAESTHETIST</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <p className="card-text">DAYS: Daily</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-left" data-aos-delay="200">
                <img src={doctor1} className="doctor-img" alt="Doctor" />
                <div className="card-body p-3">
                  <h5 className="card-title">DR. Ganesh Gupta (M.S.)</h5>
                  <p className="card-subtitle mb-2 text-muted">(Owner of the hospital)</p>
                  <p className="card-text">SPECIALITY: ORTHOPEDIC SURGEON</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
            {/* Card 1 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-right" data-aos-delay="300">
                <img
                  src={doctor}
                  className="card-img-top mb-2"
                  style={{ width: "230px", height: "auto", marginTop: "40px", paddingLeft: "20px" }}
                  alt="Doctor"
                />
                <div className="card-body p-3">
                  <h5 className="card-title mt-5">DR. Nancy Thakur (MBBS)</h5>
                  <p className="card-text">SPECIALITY: ANAESTHETIST</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <p className="card-text">DAYS: Daily</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-up" data-aos-delay="300">
                <img src={doctor1} className="doctor-img" alt="Doctor" />
                <div className="card-body p-3">
                  <h5 className="card-title">DR. Shivjeet Yadav (MBBS)</h5>
                  <p className="card-subtitle mb-2 text-muted">(Head of department)</p>
                  <p className="card-text">SPECIALITY: ORTHOPEDIC SURGEON</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-left" data-aos-delay="300">
                <img
                  src={doctor}
                  className="card-img-top mb-2"
                  style={{ width: "230px", height: "auto", marginTop: "40px", paddingLeft: "20px" }}
                  alt="Doctor"
                />
                <div className="card-body p-3">
                  <h5 className="card-title mt-5">DR. Neha Saini (MBBS)</h5>
                  <p className="card-text">SPECIALITY: ANAESTHETIST</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <p className="card-text">DAYS: Daily</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
            {/* Card 1 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-right" data-aos-delay="400">
                <img src={doctor1} className="doctor-img" alt="Doctor" />
                <div className="card-body p-3">
                  <h5 className="card-title">DR. Gaurav Gupta (The Best Surgeon)</h5>
                  <p className="card-text">SPECIALITY: ORTHOPEDIC SURGEON</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-up" data-aos-delay="400">
                <img
                  src={doctor}
                  className="card-img-top mb-2"
                  style={{ width: "230px", height: "auto", marginTop: "40px", paddingLeft: "20px" }}
                  alt="Doctor"
                />
                <div className="card-body p-3">
                  <h5 className="card-title mt-5">DR. Kajal (MBBS)</h5>
                  <p className="card-text">SPECIALITY: ANAESTHETIST</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <p className="card-text">DAYS: Daily</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col mx-5">
              <div className="cardmain border-0" data-aos="fade-left" data-aos-delay="400">
                <img src={doctor1} className="doctor-img" alt="Doctor" />
                <div className="card-body p-3">
                  <h5 className="card-title">DR. B. Kumar</h5>
                  <p className="card-subtitle mb-2 text-muted">(Medical Department)</p>
                  <p className="card-text">SPECIALITY: ORTHOPEDIC SURGEON</p>
                  <p className="card-text">TIMING: 11:00AM-3:00PM</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
