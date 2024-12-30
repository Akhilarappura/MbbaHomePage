import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";
import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <div className="image-section">
          <img src={about} alt="student with books" className="main-image" />
          <div className="overlay-card">
            <div className="card-content">
              <p>A Head Start Towards The</p>
              <p>Career Of Your Dreams</p>
              <div className="grade">A+</div>
            </div>
          </div>
        </div>

        <div className="text-section">
          <div className="welcome-text">
            <p className="welcome-label">WELCOME TO</p>
            <h1>IEC</h1>
            <div className="blue-line"></div>
          </div>

          <h2 className="description">
            International Educare Corporation, popularly known as IEC is the
            specialist in Medical Education Abroad, IEC is established in 2000.
            Since then IEC is relentlessly serving student community to cherish
            their dream of Quality Medical Education at an affordable cost. IEC
            have partnered with many renowned Medical Universities
            Internationally and always act as a link between the Universities
            and the students. At IEC we not only nurture good doctors but also
            doctor with a strong and comprehensive foundation of Medical
            Knowledge, Skills and Compassion. We train them to be the leaders,
            to make independent decisions and to collaborate with other medical
            professionals. 6500+ Studying MBBS through US 2500+ IEC Students are
            working Doctors now.
          </h2>

          <button className="learn-more-btn">Learn More About Us</button>
        </div>
      </div>

      <div className="counters-container">
        <div className="counter-item">
          <h1>
            <CountUp start={0} end={2500} duration={2.5} />
          </h1>
          <h2 className="names">Successful Doctors</h2>
        </div>

        <div className="counter-item">
          <h1>
            <CountUp start={0} end={6500} duration={2.5} />
          </h1>
          <h2 className="names">Students</h2>
        </div>

        <div className="counter-item">
          <h1>
            <CountUp start={0} end={25} duration={2.5} />
          </h1>
          <h2 className="names">Recruiting Countries</h2>
        </div>
      </div>
    </div>
  );
}
