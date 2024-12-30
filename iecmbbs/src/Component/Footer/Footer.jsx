import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="logo-head">
        <img src="https://iecmbbs.com/wp-content/uploads/2021/09/logo4-1-1.png" />
      </div>
      <div className="university">
        <h4 style={{ color: "white" }}>UNIVERSITIES</h4>
        <ul style={{ color: "white" }}>
          <li>MBBS IN GEORGIA</li>
          <li>MBBS IN UZBEKISTAN</li>
          <li>MBBS IN UKRAINE</li>
          <li>MBBS IN CHINA</li>
          <li>MBBS IN BANGLADESH</li>
          <li>MBBS IN RUSSIA</li>
          <li>MBBS IN KAZAKHISTAN</li>
          <li>MBBS / MD IN KYRGYZSTAN</li>
          <li>MBBS IN ARMENIA</li>
          <li>MBBS IN ARMENIA MBBS /MD IN PHILLIPPINES</li>
          <li>MBBS IN MOLDOVA</li>
          <li>MBBS /MD IN POLAND</li>
        </ul>
      </div>
      <div className="contact">
        <h4>CONTACT US</h4>
        <h4>Address</h4>
        <h3>
          2nd Floor, Rohit Chambers, Opp: Malayala <br />
          Manorama, SA Road, Panampilly
          , <br />
           Kochi, Kerala, India. <br />
           <h3>phone:</h3>  9387944455 <h3>Email: </h3>info@iecmbbs.co
        </h3>
      </div>
    </div>
  );
}
